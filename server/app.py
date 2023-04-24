from flask import Flask, render_template, request, jsonify
from bson.objectid import ObjectId
from flask_cors import CORS
from Database.databaseConnector import *
import os

absolute_path = os.path.dirname(__file__)

#Starts Flask Application
app = Flask(__name__)

DatabaseConnection.setUp()

client = DatabaseConnection._client
global db 
db = DatabaseConnection._db
a = "hi"
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

#Creates a Post and Get Response for the server
@app.route('/Nmap', methods=['POST', 'GET'])
def NmapData():
    
    # GET all data from database
    if request.method == 'GET':
        allData = db['nmap/IP'].find()
        dataJson = []
        for data in allData:
            id = data['_id']
            ip = data['_ip']
            scanner = data['@scanner']
            dataDict = {
                'id': str(id),
                'ip': ip,
                'scanner': scanner
                
            }
            dataJson.append(dataDict)
        print(dataJson)
        return jsonify(dataJson)

#Creates a Post and Get Response for the server
@app.route('/canvasipnodes', methods=['POST', 'GET'])
def ipdata():
    
    # GET all data from database
    if request.method == 'GET':
        allData = db['canvasmaps/IPNodes'].find()
        dataJson = []
        for data in allData:
            id = data['_id']
            ip = data['@ip']
            type = data['type']
            status = data['status']
            hostname = data['hostname']
            label = data['label']
            dataDict = {
                'id': str(id),
                'ip': ip,
                'type': type,
                'status': status,
                'hostname': hostname,
                'label': label
            }
            dataJson.append(dataDict)
        print(dataJson)
        return jsonify(dataJson)
    
#Creates a Post and Get Response for the server
@app.route('/traffic', methods=['POST', 'GET'])
def geoData():
    global a
    print(a)
    a = "b"
    # GET all data from database
    if request.method == 'GET':
        allData = db['traffic'].find()
        dataJson = []
        coords = set()
        for data in allData:
            
            uid = data['uid']
            lat = data['lat']
            lon = data['lon']
            coord = (lat, lon)
            if coord in coords:
                continue
            else:
                coords.add(coord)
            
            dataDict = {
                'uid': str(id),
                'lat': lat,
                'lon': lon
            }
            dataJson.append(dataDict)
        print(dataJson)
        return jsonify(dataJson)

@app.route('/changeTable/<string:id>', methods=['POST'])
def changeTable(id):
    global db
    # GET a specific data by id
    if request.method == 'POST':
        DatabaseConnection._db = DatabaseConnection._client[id]
        db = DatabaseConnection._db
        DatabaseConnection._name = id

        return jsonify({"message": "Success"})

#Creates a Post and Get Response for the server
@app.route('/getTable', methods=['GET'])
def getTable():
    # GET all data from database
    print(DatabaseConnection._name)
    if request.method == 'GET':
        allData = client["Projects"]["Names"].find()
        dataJson = []
        for data in allData:
            id = data['_id']
            name = data['project']
            dataDict = {
                'id': str(id),
                'name': name     
            }
            dataJson.append(dataDict)
        return jsonify(dataJson)


if __name__ == '__main__':
    app.debug = True
    app.run()