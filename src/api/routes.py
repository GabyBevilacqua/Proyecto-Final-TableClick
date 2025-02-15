"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token


api = Blueprint('api', __name__)
bcrypt = Bcrypt()

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# registrar un usuario

@api.route('/register', methods=['POST'])
def register():
    data = request.get_json()

 # Verificar si el username, email o telefono ya están en uso
    if User.query.filter_by(username=data['username']).first():
        return jsonify({"message": "El nombre de usuario ya está en uso"}), 400
    
    if User.query.filter_by(email=data['email']).first():
        return jsonify({"message": "El correo electrónico ya está en uso"}), 400
    
    if User.query.filter_by(telefono=data['telefono']).first():
        return jsonify({"message": "El teléfono ya está en uso"}), 400

    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(
        nombre_personal=data['nombrePersonal'],
        username=data['username'],
        nombre_restaurante=data['nombreRestaurante'],
        direccion=data['direccion'],
        telefono=data['telefono'],
        email=data['email'],
        password=hashed_password,
        codigo_admin=data['codigoAdmin'],
        image=data['image']
    )
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Usuario registrado exitosamente"}), 201

@api.route('/login', methods=['POST'])
def login():
    
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if user and bcrypt.check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity=str(user.id))
        print(access_token)
        return jsonify({"message": "Inicio de sesión exitoso","access_token": access_token, "user": user.serialize()}), 200
    else:
        return jsonify({"message": "Nombre de usuario o contraseña incorrectos"}), 401

@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    users = list(map(lambda user: user.serialize(), users))
    return jsonify(users), 200

# traer un usuario por su id

@api.route('/user/<int:user_id>', methods=['GET'])
def get_user_by_id(user_id):
    user = User.query.get(user_id)
    if user:
        return jsonify(user.serialize()), 200
    else:
        return jsonify({"message": "Usuario no encontrado"}), 404

# actualizar un usuario

@api.route('/user/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.get_json()
    user = User.query.get(user_id)

    if not user:
        return jsonify({"message": "Usuario no encontrado"}), 404
    
    # Verificar si el username ya está en uso por otro usuario
    if 'username' in data and data['username'] != user.username:
        if User.query.filter_by(username=data['username']).first():
            return jsonify({"message": "El nombre de usuario ya está en uso"}), 400

    # Verificar si el email ya está en uso por otro usuario
    if 'email' in data and data['email'] != user.email:
        if User.query.filter_by(email=data['email']).first():
            return jsonify({"message": "El correo electrónico ya está en uso"}), 400

    # Verificar si el teléfono ya está en uso por otro usuario
    if 'telefono' in data and data['telefono'] != user.telefono:
        if User.query.filter_by(telefono=data['telefono']).first():
            return jsonify({"message": "El teléfono ya está en uso"}), 400

    
    user.nombre_personal = data.get('nombrePersonal', user.nombre_personal)
    user.username = data.get('username', user.username)
    user.nombre_restaurante = data.get('nombreRestaurante', user.nombre_restaurante)
    user.direccion = data.get('direccion', user.direccion)
    user.telefono = data.get('telefono', user.telefono)
    user.email = data.get('email', user.email)
    user.password = bcrypt.generate_password_hash(data['password']).decode('utf-8') if 'password' in data else user.password
    user.codigo_admin = data.get('codigoAdmin', user.codigo_admin)

    db.session.commit()

    return jsonify({"message": "Usuario actualizado exitosamente"}), 200

@api.route('/user/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get(user_id)

    if not user:
        return jsonify({"message": "Usuario no encontrado"}), 404
    
    db.session.delete(user)
    db.session.commit()

