from flask import Flask
from marshmallow import Schema, fields, pre_load, validate
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy

ma = Marshmallow()
db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key = True)
    room = db.Column(db.String(250), nullable=True)
    name = db.Column(db.String(250), nullable=False)
    surn = db.Column(db.String(250), nullable=False)
    card = db.Column(db.String(250), nullable=True)

    def __init__(self, name, surn, card, room):
        self.name = name
        self.surn = surn
        self.card = card
        self.room = room

    def __repr__(self):
        return '<User Name:{}, Surname:{}, Card:{}, Room: {}'.format(self.name, self.surn, self.card, self.room)

class UserSchema(ma.Schema):
    id = fields.Integer(dump_only=True)
    name = fields.Str(required=True)
    surn = fields.Str(required=True)
    card = fields.Str(required=False)
    room = fields.Str(required=False)

