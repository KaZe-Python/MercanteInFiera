from flask import Flask
from marshmallow import Schema, fields, pre_load, validate
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy

ma = Marshmallow()
db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(250), nullable=False)
    surn = db.Column(db.String(250), nullable=False)
    card = db.Column(db.String(250), nullable=True)

    def __init__(self, name, surn, card):
        self.name = name
        self.surn = surn
        self.card = card

    def __repr__(self):
        return '<User Name:{}, Surname:{}, Card:{}'.format(self.name, self.surn, self.card)

class UserSchema(ma.Schema):
    id = fields.Integer(dump_only=True)
    name = fields.Str(required=True)
    surn = fields.Str(required=True)
    card = fields.Str(required=False)