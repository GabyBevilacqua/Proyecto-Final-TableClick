"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from api.utils import APIException, generate_sitemap
from api.models import db, User
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
import cloudinary
import cloudinary.uploader
from cloudinary.utils import cloudinary_url
from flask_jwt_extended import JWTManager
from datetime import timedelta
from flask_mail import Mail, Message
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity, decode_token
import base64  
from werkzeug.security import generate_password_hash
from werkzeug.exceptions import Unauthorized
from flask_cors import CORS
from datetime import timedelta


# from models import Person

ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(
    os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
CORS(app) 

# esta parte es para la configuracion de el flask-mail
app.config.update(
    MAIL_SERVER='smtp.gmail.com',
    MAIL_PORT=587,
    MAIL_USE_TLS=True,
    MAIL_USERNAME='shaerkbladex@gmail.com',
    MAIL_PASSWORD='rsgf dwgh clck icvc'
)

mail = Mail(app)
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(days=1)
jwt = JWTManager(app)
app.url_map.strict_slashes = False

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace(
        "postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

#------------------------------------------------------------------------------------------

#https://res.cloudinary.com/dzqgni1qi/image/upload/v1737052700/hat.png

# cloudinary configuration
# Configuration       
cloudinary.config( 
    cloud_name = "dzqgni1qi", 
    api_key = "782366222663955", 
    api_secret = os.getenv("CLOUDINARY_API_SECRET"), # Click 'View API Keys' above to copy your API secret
    secure=True
)


@app.route('/upload-image', methods=['POST'])
def upload_image():
    
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['file']  # Este es un objeto tipo FileStorage

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
       #desde el objeto recibido
        result = cloudinary.uploader.upload(file)
        
        
        return jsonify({
            'message': 'Image uploaded successfully',
            'url': result['secure_url']
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/update-user-image', methods=['PUT'])
@jwt_required()
def update_user_image():
    current_user_id = get_jwt_identity()
    data = request.get_json()
    profile_image = data.get('profile_image')
    
    print(profile_image)
    try:
        user = User.query.get(current_user_id)
        if user:
           
            user.image = profile_image
            print(user)
            db.session.commit()
            return jsonify({
                'message': 'Profile image updated successfully',
                'image': profile_image
            }), 200
        else:
            return jsonify({'error': 'User not found'}), 404
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
    
    
# Upload an image
#upload_result = cloudinary.uploader.upload("src/front/img/imagenLogo.png",
 #                                          public_id="hat")
#print(upload_result["secure_url"])



# Optimize delivery by resizing and applying auto-format and auto-quality
optimize_url, _ = cloudinary_url("hat", fetch_format="auto", quality="auto")
print(optimize_url)

# Transform the image: auto-crop to square aspect_ratio
auto_crop_url, _ = cloudinary_url("hat", width=500, height=500, crop="auto", gravity="auto")
print(auto_crop_url)

#------------------------------------------------------------------------------------------

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

#-------------------------------------TOKEN----------------------------------------------------
flask = JWTManager(app)
# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')
# app.register_blueprint(api.route, url_prefix='/user')
app.config["SECRET_KEY"] = "clave secreta"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(minutes=5)
# Handle/serialize errors like a JSON object


@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints


@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')


#He estado probando diferentes librerias pero creo que no entendi bien la implementacion,
#Probe PyJWT, jwt-decode y ahora estoy implementando jsonwebtoken
#Principalmente estaba usando lo de la clase de base64 pero me daba error porque no se encodeaba bien y me salia el error de: "Not enough segments"
#La lógica a la que llegue fue basicamente que del token base creado, transformarlo en un string entero sin puntos ni simbolos que puedan
# dar fallos a la url, asi que lo convierto en un token-url-safe(tambien probe con el base64urlsafe, pero tampoco me salia bien)


#La parte de mandar el email y que se abra el link va bien lo unico es el token que falla el resto esta correcto en principio

# Función para convertir el token a URL-safe Base64
def make_token_url_safe(token):
    return token.replace('+', '-').replace('/', '_').rstrip('=')


@app.route('/request-reset-password', methods=['POST'])
def request_reset_password():
    email = request.json.get("email")
    
    # Verificamos si el email existe en la base de datos
    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"message": "El email no está en la base de datos"}), 404
    
    # Generamos el token JWT con la identidad (email)
    token = create_access_token(identity=email, expires_delta=timedelta(minutes=30))
    print(f"Token generado: {token}")  # Este es el token con los puntos
    
    # Convertimos el token a formato URL-safe
    token_url_safe = make_token_url_safe(token)
    print(f"Token URL-safe: {token_url_safe}")
    
    # Este es el enlace para el restablecimiento de contraseña
    # IMPORTANTE!! Cambiar cada uno a su backend url
    # reset_link = f"https://fantastic-space-parakeet-v6gwvwgwr6762p5xp-3001.app.github.dev/reset-password/{token_url_safe}"
    reset_link = f"https://fantastic-space-parakeet-v6gwvwgwr6762p5xp-3000.app.github.dev/reset-password"

    # Enviar el correo con el enlace para restablecer la contraseña
    msg = Message(
        'Recupera tu contraseña',
        sender=app.config["MAIL_USERNAME"],
        # IMPORTANTE!! Tiene que estar el email registrado
        recipients=[email]
    )
    #Este es el mensaje que llega al email
    msg.html = f'<p>Haga <a href="{reset_link}">click aquí</a> para restablecer la contraseña.</p>'
    mail.send(msg)

    return jsonify({"message": "Correo de restablecimiento enviado"}), 200

@app.route('/reset-password/<token>', methods=['GET'])
def reset_password_page(token):
    try:
        # Restaurar el token URL-safe a Base64 estándar
        restored_token = restore_token_from_url_safe(token)
        
        # Verificar el token usando la clave secreta
        decoded_token = jwt.decode(restored_token, "SECRET_KEY", algorithms=["HS256"])
        print("Token decodificado:", decoded_token)

        # Si el token es válido, devuelve el payload
        return jsonify({"message": "Token válido", "data": decoded_token}), 200
    
    # Manejamos errores de si ha expirado el token o si no funciona
    except jwt.ExpiredSignatureError:
        return jsonify({"message": "Token expirado"}), 401
    except jwt.InvalidTokenError:
        return jsonify({"message": "Token inválido"}), 401

# Función para restaurar el token de URL-safe a Base64 estándar
def restore_token_from_url_safe(token_url_safe):
    return token_url_safe.replace('-', '+').replace('_', '/') + '=' * ((4 - len(token_url_safe) % 4) % 4)


@app.route('/reset-password', methods=['POST'])
# @jwt_required(): 
# hace que la solicitud requiera un token JWT válido el cual identifica al usuario de la solicitud
@jwt_required()
def reset_password():
    
    # Aqui sacamos el email guardado con la informacion del usuario en el token
    email = get_jwt_identity()

    # Aqui extraemos la informacion con las contraseñas del usuario en formato JSON
    user_data = request.get_json()
    if not user_data:
        return jsonify({"error":"Faltan datos :c"}), 400

    print(email)
    print(user_data)

    # Aqui hacemos que sean iguales las contraseñas 
    if user_data['password'] == user_data['confirmPassword']:
        None

    # Aqui sacamos la informacion de la contraseña del usuario
    password = user_data.get("password")
    print(password)

    # Aqui generamos un hash para el password
    user_data.password = generate_password_hash(password)
    
    # Guardamos los cambios en la base de datos
    db.session.commit() 
    return "ok", 200    

# @app.route('/reset-password', methods=['POST'])
# @jwt_required()
# def reset_password():
#     # Obtener el email del token
#     email = get_jwt_identity()

#     # Obtener los datos del cuerpo de la solicitud
#     user_data = request.get_json()

#     if not user_data:
#         return jsonify({"error": "Faltan datos :c"}), 400  # 400 es un mal formato de la solicitud

#     print("Datos recibidos:", user_data)

#     if not user_data.get("password") or not user_data.get("confirmPassword"):
#         return jsonify({"error": "Faltan las contraseñas."}), 422  # Específicamente manejar el error 422

#     if user_data['password'] != user_data['confirmPassword']:
#         return jsonify({"error": "Las contraseñas no coinciden."}), 422

#     # Si todo está bien, proceder a cambiar la contraseña
#     password = user_data.get("password")
#     print("Nueva contraseña:", password)

#     # Aquí agregar el proceso para guardar la contraseña con hash, etc.

#     return jsonify({"message": "Contraseña restablecida exitosamente"}), 200


# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
    return response


# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
