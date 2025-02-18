from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Respuestas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombreCompleto = db.Column(db.String(100), nullable=False)
    correo = db.Column(db.String(100), nullable=False)
    celular = db.Column(db.String(100), nullable=False)
    edad = db.Column(db.Integer, nullable=False)
    sexo = db.Column(db.String(100), nullable=False)
    pais = db.Column(db.String(100), nullable=False)
    saludFisica = db.Column(db.Integer, nullable=False)
    saludEmocional = db.Column(db.Integer, nullable=False)
    familia = db.Column(db.Integer, nullable=False)
    amigos = db.Column(db.Integer, nullable=False)
    vidaSocial = db.Column(db.Integer, nullable=False)
    diversionRecreacion = db.Column(db.Integer, nullable=False)
    estudiosTrabajo = db.Column(db.Integer, nullable=False)
    finanzas = db.Column(db.Integer, nullable=False)
    desarrolloPersonal = db.Column(db.Integer, nullable=False)
    espiritual = db.Column(db.Integer, nullable=False)
    