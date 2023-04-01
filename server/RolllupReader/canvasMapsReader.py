import sys, os

sys.path.append(os.path.dirname(os.path.dirname(__file__)))
from Database.databaseConnector import DatabaseRequestNode

class CanvasMapsReader:
    @staticmethod
    def getRequestNodeList(data):
        CanvasMapsReader.getIpRequestNode(data)

        requestNodeList = []
        requestNodeList.append(CanvasMapsReader.getIpRequestNode(data))
        requestNodeList.append(CanvasMapsReader.getEdgeRequestNode(data))

        return requestNodeList
    
    @staticmethod
    def getIpRequestNode(data):
        nodeMap = data[0]['map']['node']
        dataList = [node for node in nodeMap]
        return DatabaseRequestNode(dataList, "add", "canvasmaps/IPNodes")
    
    @staticmethod
    def getEdgeRequestNode(data):
        edgeMap = data[0]['map']['edge']
        
        ipDict = {}
        for edge in edgeMap:
            ipList = edge.split("~")
            if ipList[1] in ipDict:
                ipDict[ipList[1]]["connections"].append(ipList[2])
            else:
                ipDict[ipList[1]] =  {"_ip":ipList[1] , "connections" : [ipList[2]]}
                
        dataList = [ipDict[ip] for ip in ipDict]

        return DatabaseRequestNode(dataList, "add", "canvasmaps/EdgeMap")
    
    


