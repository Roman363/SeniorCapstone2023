"""
Module dedicated for database interactions
"""

import yaml
from pymongo import MongoClient

   
class DatabaseRequestNode:

    def __init__(self, dataList: list[dict()], operation: str, table: str):
        """ Initializes an instance of a Request Node\n
        Parameters:\n
        dataList: will hold the data that will be sent to the database\n
        operation: can hold the following values "add"\n
        table: will hold the table name in the database
        """

        self.dataList = dataList
        self.operation = operation
        self.table = table

class DatabaseConnection:
    """ Class dedicated to create/read/update/delete data in the Database\n
        """
    _requestLog = []
    _client = None
    _db = None

    @staticmethod
    def setUp(absolute_path):
        """
        Sets up a connection with the database with the information provided in database.yaml\n
        Parameter:\n
        absolute_path: stores the path of the directory containing database.yaml
        """
        #Loads configuration file for the server
        config = yaml.safe_load(open(absolute_path + '\\database.yaml'))

        #Creates the string needed to connect to the server
        CONNECTION_STRING = config['uri']

        #Creates an instance of the server using the connection
        DatabaseConnection._client = MongoClient(CONNECTION_STRING)

        #Creates an instance of a database
        DatabaseConnection._db = DatabaseConnection._client[config['cluster']]  

        #Creates a list to store all requests
        DatabaseConnection._requestLog = []


    @staticmethod
    def request(requestNode: DatabaseRequestNode):
        """
        Sends data to the database using the provided DatabaseRequestNode
        """
        if requestNode.operation == "add":
            print("Adding request to table: " + requestNode.table)
            return DatabaseConnection._add(requestNode)

    @staticmethod
    def _add(requestNode: DatabaseRequestNode):
        #logs the request to the storage to 
        DatabaseConnection._requestLog.append(requestNode)

        #sends the data to the database
        return DatabaseConnection._db[requestNode.table].insert_many(requestNode.dataList)

    @staticmethod
    def getRequestLog():
        return DatabaseConnection._requestLog
