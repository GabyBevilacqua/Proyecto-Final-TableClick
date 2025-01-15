"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from flask_bcrypt import Bcrypt

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

@api.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(
        nombre_personal=data['nombrePersonal'],
        username=data['username'],
        nombre_restaurante=data['nombreRestaurante'],
        direccion=data['direccion'],
        telefono=data['telefono'],
        email=data['email'],
        password=hashed_password,
        codigo_admin=data['codigoAdmin']
    )
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Usuario registrado exitosamente"}), 201

@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()

    if user and bcrypt.check_password_hash(user.password, data['password']):
        return jsonify({"message": "Inicio de sesión exitoso"}), 200
    else:
        return jsonify({"message": "Nombre de usuario o contraseña incorrectos"}), 401

@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    users = list(map(lambda user: user.serialize(), users))
    return jsonify(users), 200

@api.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    if user is None:
        raise APIException("Usuario no encontrado", status_code=404)
    return jsonify(user.serialize()), 200

@api.route('/users/<int:id>', methods=['PUT'])
def update_user(id):
    user = User.query.get(id)
    if user is None:
        raise APIException("Usuario no encontrado", status_code=404)
    data = request.get_json()
    user.nombre_personal = data['nombrePersonal']
    user.username = data['username']
    user.nombre_restaurante = data['nombreRestaurante']
    user.direccion = data['direccion']
    user.telefono = data['telefono']
    user.email = data['email']
    user.codigo_admin = data['codigoAdmin']
    db.session.commit()
    return jsonify(user.serialize()), 200

@api.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    if user is None:
        raise APIException("Usuario no encontrado", status_code=404)
    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": "Usuario eliminado exitosamente"}), 200
