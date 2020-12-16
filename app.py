from flask import Blueprint, render_template
from flask_restful import Api
from resources.User import UserResource
from resources.GameHandler import _play, _admin

api_bp = Blueprint('api', __name__)
api = Api(api_bp)

game_bp = Blueprint('game', __name__, static_url_path="static")

api.add_resource(UserResource, '/User')
game_bp.add_url_rule('/play', 'play', _play)
game_bp.add_url_rule('/admin', 'admin', _admin)

@game_bp.app_errorhandler(404)
def _404_notFound(error):
    return render_template('404.html'), 404