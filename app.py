from flask import Blueprint
from flask_restful import Api
from resources.User import UserResource
from resources.GameHandler import _play, _admin, _form

api_bp = Blueprint('api', __name__)
api = Api(api_bp)

game_bp = Blueprint('game', __name__, template_folder='templates')

api.add_resource(UserResource, '/User')
game_bp.add_url_rule('/play', 'play', _play)
game_bp.add_url_rule('/admin', 'admin', _admin)
game_bp.add_url_rule('/form', 'form', _form)