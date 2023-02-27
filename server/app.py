from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS
from databaseConnector import *
import yaml, os

absolute_path = os.path.dirname(__file__)

#Starts Flask Application
app = Flask(__name__)

DatabaseConnection.setUp(absolute_path)

client = DatabaseConnection._client
db = DatabaseConnection._db

CORS(app)

#Show the HTML Homepage for the server
@app.route('/')
def index():
    return render_template('home.html')

#Creates a Post and Get Response for the server
@app.route('/users', methods=['POST', 'GET'])
def data():
    
    # POST a data to database
    if request.method == 'POST':
        body = request.json
        print(request.json)
        firstName = body['firstName']
        lastName = body['lastName']
        emailId = body['emailId'] 
        # db.users.insert_one({
        db['users'].insert_one(body)
        return jsonify({
            'status': 'Data is posted to MongoDB!',
            'firstName': firstName,
            'lastName': lastName,
            'emailId':emailId
        })
    
    # GET all data from database
    if request.method == 'GET':
        allData = db['users'].find()
        dataJson = []
        for data in allData:
            id = data['_id']
            firstName = data['firstName']
            lastName = data['lastName']
            emailId = data['emailId']
            dataDict = {
                'id': str(id),
                'firstName': firstName,
                'lastName': lastName,
                'emailId': emailId
            }
            dataJson.append(dataDict)
        print(dataJson)
        return jsonify(dataJson)

        

@app.route('/users/<string:id>', methods=['GET', 'DELETE', 'PUT'])
def onedata(id):

    # GET a specific data by id
    if request.method == 'GET':
        data = db['users'].find_one({'_id': ObjectId(id)})
        id = data['_id']
        firstName = data['firstName']
        lastName = data['lastName']
        emailId = data['emailId']
        dataDict = {
            'id': str(id),
            'firstName': firstName,
            'lastName': lastName,
            'emailId':emailId
        }
        print(dataDict)
        return jsonify(dataDict)
        
    # DELETE a data
    if request.method == 'DELETE':
        db['users'].delete_many({'_id': ObjectId(id)})
        print('\n # Deletion successful # \n')
        return jsonify({'status': 'Data id: ' + id + ' is deleted!'})

    # UPDATE a data by id
    if request.method == 'PUT':
        body = request.json
        firstName = body['firstName']
        lastName = body['lastName']
        emailId = body['emailId']

        db['users'].update_one(
            {'_id': ObjectId(id)},
            {
                "$set": {
                    "firstName":firstName,
                    "lastName":lastName,
                    "emailId": emailId
                }
            }
        )

        print('\n # Update successful # \n')
        return jsonify({'status': 'Data id: ' + id + ' is updated!'})


if __name__ == '__main__':
    app.debug = True
    app.run()