import sys, os

sys.path.append(os.path.dirname(os.path.dirname(__file__)))
from Database.databaseConnector import DatabaseRequestNode

class NmapReader:
    @staticmethod
    def getRequestNodeList(data):

        requestNodeList = []
        
        dataMap = data[0]["nmaprun"]
        #dataMap["_ip"] = data[0]["nmaprun"]["host"]["address"]
        
        address = data[0]["nmaprun"]["host"]["address"]

        if(type(address) == list):
            for obj in address:
                if "@addrtype" in obj and obj["@addrtype"] == "ipv4":
                    dataMap["_ip"] = obj["@addr"]
                    break
        else:
           dataMap["_ip"] = data[0]["nmaprun"]["host"]["address"]["@addr"]
        
        return [DatabaseRequestNode([dataMap], "add", "nmap/IP"), DatabaseRequestNode([dataMap], "add", "nmap/PivotIP")]
    
