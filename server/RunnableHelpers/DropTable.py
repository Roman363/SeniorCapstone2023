import os, sys

sys.path.append(os.path.dirname(os.path.dirname(__file__)))


from Database.databaseConnector import *


DatabaseConnection.setUp()

client = DatabaseConnection._client
db = DatabaseConnection._db

client.drop_database("Project2")
