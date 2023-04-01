"""
Module dedicated to read the rollup file
"""
import tarfile, os, sys

sys.path.append(os.path.dirname(os.path.dirname(__file__)))

from Database.databaseConnector import *
from RolllupReader.reader import *
from RollupIngestion.rollupExtraction import *

def sendToDatabase(rollupFileList: list[tarfile.TarInfo]) -> None:
    """
    Sends the files provided in the infoList to the database\n
    Parameters:\n
    infoList: A list containing tarInfo instances directories inside of the TarFile provided
    absolute_path: path containing where the files actually are
    """

    for rollupFile in rollupFileList:
        
        #Gets the file path to open it
        filePath = os.path.join(RollupExtractor.getFilteredExtractedRollupDirectory(), rollupFile.path)
                    
        requestNodeList = Reader.getFileData(filePath, rollupFile)

        #If data was not found or unreadable then skip the file
        if len(requestNodeList) == 0:
            print("Couldn't read file: " + rollupFile.path)
            continue
        
        #Sends the node to be added to the database
        for requestNode in requestNodeList:
            DatabaseConnection.request(requestNode)

def startRollupReader():
    
    #Connects to the database
    DatabaseConnection.setUp()

    #Sets up the extractor class
    RollupExtractor.setUp()

    #extract the needed files
    RollupExtractor.extractRollup(unfiltered= True, filtered= True)

    #Gets the zipped rollup directory
    zippedRollupDirectory = RollupExtractor.getZippedRollupDirectory()

    #Opens up the rollup as a tarfile object
    rollupTarFile = tarfile.open(zippedRollupDirectory)

    #obtains all the actual files
    rollupFileList = [member for member in rollupTarFile.getmembers() if member.isfile()]

    #Sends the files to the database to their respective tables
    sendToDatabase(rollupFileList)

    #closes up the rollup tarfile object
    rollupTarFile.close()

    #Deletes local rollup files
    RollupExtractor.deleteExtractedRollup(unfiltered= True, filtered= True)

