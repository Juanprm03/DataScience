from flask import Blueprint, request, jsonify
from models.respuestas import Respuestas, db

respuestas_bp = Blueprint('respuestas', __name__)

@respuestas_bp.route('/respuestas', methods=['GET'])
def obtener_respuestas():
    respuestas = Respuestas.query.all()
    respuesta = []
    for res in respuestas:
        respuesta.append({
            'id': res.id,
            'nombreCompleto': res.nombreCompleto,
            'correo': res.correo,
            'celular': res.celular,
            'edad': res.edad,
            'sexo': res.sexo,
            'pais': res.pais,
            'saludFisica': res.saludFisica,
            'saludEmocional': res.saludEmocional,
            'familia': res.familia,
            'amigos': res.amigos,
            'vidaSocial': res.vidaSocial,
            'diversionRecreacion': res.diversionRecreacion,
            'estudiosTrabajo': res.estudiosTrabajo,
            'finanzas': res.finanzas,
            'desarrolloPersonal': res.desarrolloPersonal,
            'espiritual': res.espiritual
        })
    return jsonify(respuesta)

@respuestas_bp.route('/respuestas', methods=['POST'])
def crear_respuesta():
    data = request.get_json()
    respuesta = Respuestas(
        nombreCompleto=data['nombreCompleto'],
        correo=data['correo'],
        celular=data['celular'],
        edad=data['edad'],
        sexo=data['sexo'],
        pais=data['pais'],
        saludFisica=data['saludFisica'],
        saludEmocional=data['saludEmocional'],
        familia=data['familia'],
        amigos=data['amigos'],
        vidaSocial=data['vidaSocial'],
        diversionRecreacion=data['diversionRecreacion'],
        estudiosTrabajo=data['estudiosTrabajo'],
        finanzas=data['finanzas'],
        desarrolloPersonal=data['desarrolloPersonal'],
        espiritual=data['espiritual']
    )
    db.session.add(respuesta)
    db.session.commit()
    return jsonify({'mensaje': 'Respuesta creada exitosamente'}), 201