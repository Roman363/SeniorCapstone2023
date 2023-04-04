
import os, sys

sys.path.append(os.path.dirname(os.path.dirname(__file__)))

import RollupIngestion.rollupIngestion
from Database.databaseConnector import *
from RolllupReader.reader import *
from RollupIngestion.rollupExtraction import *

#Sends entire rollup
RollupIngestion.rollupIngestion.startRollupReader()

#Connects to the database
DatabaseConnection.setUp()

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

