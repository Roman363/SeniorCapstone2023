import sys, os

sys.path.append(os.path.dirname(os.path.dirname(__file__)))
from Database.databaseConnector import DatabaseRequestNode

class TrafficReader:
    @staticmethod
    def getRequestNodeList(data):
        dataList = []
        for d in data[0]:
            dataList.append(data[0][d])
            
        return [DatabaseRequestNode(dataList, "add", "traffic"), DatabaseRequestNode(dataList, "add", "pivotTraffic")]
    