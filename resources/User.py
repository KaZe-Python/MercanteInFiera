from flask import request
from flask_restful import Resource
from Model import db, User, UserSchema
import json

users_schema = UserSchema(many=True)
user_schema = UserSchema()

class UserResource(Resource):
    def get(self):
        users = User.query.all()
        result = users_schema.dump(users)
        return {'status': 'success', 'data': result}, 200

    def post(self):
        json_data = json.loads(request.data, strict=False)
        if not json_data:
            return {'message': 'No input data provided'}, 400

        data = user_schema.load(json_data)
        if data:
            user = User.query.filter_by(name=data.get("name"), surn=data.get("surn")).first()
            r = user_schema.dumps(user)
            if user:    #Does User: Name, Surname exist
                return {"message": 'User already exists', "user": r}, 400
            else:
            #User doesn't exist
                user = User(data.get("name"), data.get("surn"), None)
                db.session.add(user)
                db.session.commit()
                result = user_schema.dumps(user)
                return {"status": 'success', 'data': result}, 201

    def put(self):
        json_data = json.loads(request.data, strict=False)
        if not json_data:
            return {"message": 'No input data provided'}, 400
        
        data = user_schema.load(json_data)
        if data: #If an actual JSON data is parsed
            user = User.query.filter_by(name=data.get("name"), surn=data.get("surn")).first()
            if not user: #If user doesn't exist
                return {"message": 'User does not exist'}, 400

            user.card = data.get("card")
            db.session.commit()
            result = user_schema.dumps(user)
            return {"status": 'success', "data": result}, 204

    def delete(self):
        json_data = request.json
        if not json_data:
            return {'message': 'No input data provided'}, 400

        data, errors = user_schema.load(json_data)
        if errors:
            return errors, 422
        
        user = User.query.filter_by(name=data["name"], surn=data["surn"]).delete()
        db.session.commit()

        result = user_schema.dumps(user)

        return {"status": 'success', 'data': result}, 204