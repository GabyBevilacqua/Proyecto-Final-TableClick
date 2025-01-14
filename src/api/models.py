from flask_sqlalchemy import SQLAlchemy
from flask import Flask, request, jsonify
from werkzeug.security import generate_password_hash

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    nombre_personal = db.Column(db.String(80), nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)
    nombre_restaurante = db.Column(db.String(120), nullable=False)
    direccion = db.Column(db.String(200), nullable=False)
    telefono = db.Column(db.String(20), unique=True, nullable=False)
    codigo_admin = db.Column(db.String(20), nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre_personal": self.nombre_personal,
            "username": self.username,
            "nombre_restaurante": self.nombre_restaurante,
            "direccion": self.direccion,
            "telefono": self.telefono,
            "codigo_admin": self.codigo_admin,
            # do not serialize the password, its a security breach
        }