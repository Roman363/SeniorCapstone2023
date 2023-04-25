from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS
import yaml
import networkx as nx


#Starts Flask Application
app = Flask(__name__)

#Loads configuration file for the server
config = yaml.safe_load(open('database.yaml'))

#Creates the string needed to connect to the server
CONNECTION_STRING = config['uri']

#Creates an instance of the server using the connection
client = MongoClient(CONNECTION_STRING)

#Creates an instance of a database
db = client[config['cluster']]

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
            
            id = data['uid']
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




if __name__ == '__main__':
    app.debug = True
    app.run()