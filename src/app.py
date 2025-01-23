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
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
import base64  
from werkzeug.security import generate_password_hash
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



@app.route('/request-reset-password', methods=['POST'])
def request_reset_password():
    email = request.json.get("email")
    print(email)
    
    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"message":"El email no está en la base de datos"})
    
    token = create_access_token(identity=email, expires_delta=timedelta(minutes=3))
    token_byte = token.encode('utf-8')
    encoded_token = base64.b64encode(token_byte)
    print(token)

    reset_link = f"https://automatic-disco-5g4579xjp97w2qgg-3000.app.github.dev/reset-password/{encoded_token}"
    msg = Message(
    'Recupera Contraseña',
    sender=app.config["MAIL_USERNAME"],
    recipients=[email]
    )

    msg.html = f'<p>Haga <a href="{reset_link}">click aqui</a> para restablecer contraseña</p>'

    mail.send(msg)

    return jsonify({"message":"Email enviado"})

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
