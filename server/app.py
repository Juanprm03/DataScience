from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from config import Config
from models.respuestas import db
from routes.respuestas import respuestas_bp

app = Flask(__name__)
app.config.from_object(Config)
CORS(app, origins=["http://localhost:5173/?"])

db.init_app(app)
with app.app_context():
    db.create_all()
    
app.register_blueprint(respuestas_bp)

if __name__ == '__main__':
    app.run(debug=True)