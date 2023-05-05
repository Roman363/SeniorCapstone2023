from flask import Flask, render_template, request, jsonify
from bson.objectid import ObjectId
from flask_cors import CORS
from Database.databaseConnector import *
import os
import networkx as nx
import shutil
import RollupIngestion.rollupIngestion
from RolllupReader.reader import *
from RollupIngestion.rollupExtraction import *


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
        firstName = body['firstName']
        lastName = body['lastName']
        emailId = body['emailId'] 
        # db.users.insert_one({
        db['users'].insert_one({
            "firstName": firstName,
            "lastName": lastName,
            "emailId":emailId
        })
        return jsonify({
            'status': 'Data is posted to MongoDB!',
            'firstName': firstName,
            'lastName': lastName,
            'emailId':emailId
        })
    
    # GET all data from database
    if request.method == 'GET':
        allData = db['user'].find()
        dataJson = []
        for data in allData:
            #print(data)
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
        #print(dataJson)
        print(jsonify(dataJson))
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
            print(data['check'])
            if data['check']:
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
    
    # GET all data from database
    if request.method == 'GET':
        allData = db['traffic'].find()
        dataJson = []
        coords = set()
        for data in allData:
            
            id = data['_id']
            lat = data['lat']
            lon = data['lon']
            coord = (lat, lon)
            if coord in coords:
                continue
            else:
                coords.add(coord)
            
            dataDict = {
                'id': str(id),
                'lat': lat,
                'lon': lon
            }
            dataJson.append(dataDict)
        print(dataJson)
        return jsonify(dataJson)


#Creates a Post and Get Response for the server
@app.route('/edges', methods=['POST', 'GET'])
def edgedata():
    
    # GET all data from database
    if request.method == 'GET':
        allData = db['canvasmaps/EdgeMap'].find()
        dataJson = []
        x = 0
        for data in allData:
            id = data['_id']
            ip = data['_ip']
            connections = data['connections']
            for dest in connections:

                dataDict = {
                    'id': str(x),
                    'source': ip,
                    'target': dest,
                    'animated': True,
                    'style': {'stroke': 'red'}
                }
                dataJson.append(dataDict)
                x+=1

        print(dataJson)
        return jsonify(dataJson)

#Creates a Post and Get Response for the server
@app.route('/networkNodes', methods=['POST', 'GET'])
def networkNodes():
    
    # GET all data from database
    if request.method == 'GET':
        connectionData = db['canvasmaps/EdgeMap'].find()
        graph = nx.Graph()
        dataJson = []
        print(connectionData)
        
        s = set()
        for data in connectionData:
            connections = data['connections']
            print("what up ")
            s.add(data['_ip'])
            graph.add_node(data['_ip'])

            for dest in connections:
                print(dest)
                if dest not in s:
                    s.add(dest)
                    print(dest)
                    graph.add_node(dest)

    
                graph.add_edge(data['_ip'], dest)



        pos = nx.spring_layout(graph)
        print(pos)   
            


        for id in pos:
            
            dataDict = {
                'id': id,
                'position': {'x':pos[id][0]*900,'y':pos[id][1]*600},
                'data': {'label': id},
                'draggable': True 

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
    
@app.route('/deleteTable/<string:id>', methods=['POST'])
def deleteTable(id):
    global db
    # GET a specific data by id
    if request.method == 'POST':
        client.drop_database(id)
        client["Projects"]["Names"].delete_one({ "project": id })

        return jsonify({"message": "Success"})

@app.route('/createTable', methods=['POST'])
def createTable():
    global db
    # GET a specific data by id
    if request.method == 'POST':
        text = request.form.get("text")
        file = request.files.get("file")
        print(file.filename)
        print(file.content_type)

        print(text)
        print(file)
        parent = os.path.dirname(__file__)
        rollupData = os.path.join(parent, "RollupData")
        destination_file = os.path.join(rollupData, file.filename)

        file.save(destination_file)

        yamlData = os.path.join(parent, "Database")
        yaml_file = os.path.join(yamlData, "database.yaml")

        

        # Replace "/path/to/yaml/file.yaml" with the actual path to your YAML file
        with open(yaml_file, "r") as f:
            data = yaml.safe_load(f)

        # Modify the data however you need to
        data["cluster"] = text

        # Save the changes back to the YAML file
        with open(yaml_file, "w") as f:
            yaml.safe_dump(data, f)

        #Sends entire rollup
        RollupIngestion.rollupIngestion.startRollupReader()

        DatabaseConnection._db = DatabaseConnection._client[text]
        db = DatabaseConnection._db
        DatabaseConnection._name = text

        
        client["Projects"]["Names"].insert_one({"project": DatabaseConnection._name})
        
        RollupExtractor.setUp()
        rollupParentPath = RollupExtractor.getRollupParentDirectory()

        path = os.path.join(rollupParentPath, "TakMap")
        path = os.path.join(path, "TAK_TrafficS.pcapng")

        data = PcapReader.getData(path)
        requestNodeList = TrafficReader.getRequestNodeList(data)
        #Sends the node to be added to the database    
        #Sends the node to be added to the database
        for requestNode in requestNodeList:
            DatabaseConnection.request(requestNode)


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

#Creates a Post and Get Response for the server
@app.route('/listipnodes', methods=['GET'])
def listipdata():
    
    
    # GET all data from database
    if request.method == 'GET':
        allData = db['canvasmaps/IPNodes'].find()
        dataJson = []
        for data in allData:
            id = data['_id']
            ip = data['@ip']
            type = data['type']
            status = data['status']
            check = data['check']
            dataDict = {
                'id': str(id),
                'ip': ip,
                'type': type,
                'status': status,
                'check': check
            }
            dataJson.append(dataDict)
        print(dataJson)
        return jsonify(dataJson)
    
#Creates a Post and Get Response for the server
@app.route('/updateipnodes', methods=['POST'])
def updatelistipdata():
    
    # GET all data from database
    if request.method == 'POST':
        ip = request.json.get("ip")
        isChecked = request.json.get("isChecked")
        

        myquery = { "@ip": ip }
        newvalues = { "$set": { "check": isChecked } }

        db['canvasmaps/IPNodes'].update_one(myquery, newvalues)

        return jsonify({"message": "Success"})


#Creates a Post and Get Response for the server
@app.route('/canvasipnodes2', methods=['POST', 'GET'])
def ipdata2():
    
    # GET all data from database
    if request.method == 'GET':
        allData = db['canvasmaps/IPNodes'].find()
        dataJson = []
        for data in allData:
            print(data['check'])
            if data['check']:
                id = data['_id']
                ip = data['@ip']
                nmap = data['nmap-os']
                openports = data['open-ports']

                dataDict = {
                    'id': str(id),
                    'ip': ip,
                    'nmap': nmap,
                    'openports': openports["port"] if int(openports["@count"]) > 0 else [],
                }
                dataJson.append(dataDict)
        print(dataJson)
        return jsonify(dataJson)



if __name__ == '__main__':
    app.debug = True
    app.run()