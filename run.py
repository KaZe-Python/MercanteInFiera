from flask import Flask

def create_app(config_filename):
    app = Flask(__name__)
    app.config.from_object(config_filename)

    from app import api_bp, game_bp
    app.register_blueprint(api_bp, url_prefix='/api')
    app.register_blueprint(game_bp, url_prefix='/game')

    from Model import db
    db.init_app(app)

    return app

if __name__ == "__main__":
    app = create_app("config")
    app.run(debug=True)