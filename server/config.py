import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///aroundlifedb.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.urandom(24)  # Clave secreta para Flask
