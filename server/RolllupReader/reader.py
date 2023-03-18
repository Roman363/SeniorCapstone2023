import tarfile, sys, os
from RolllupReader.canvasMapsReader import *
from RolllupReader.nmapReader import *

sys.path.append(os.path.dirname(os.path.dirname(__file__)))
from FileReader.xmlReader import *
from Database.databaseConnector import DatabaseRequestNode


"""
Module dedicated to read Rollup Files
"""
class Reader:
    """
    Class dedicated to read rollup files
    """
    @staticmethod
    def getFileType(rollupFile: tarfile.TarInfo()) -> str:
        """
        Returns the file type for the tarInfo provided\n
        Parameters:\n
        rollupFile: a tarInfo instance\n
        """
        #separates the path into sections divided by "/"
        filePath = rollupFile.name.split("/")

        #obtains the actual name of the file
        name = filePath[-1]

        #obtains the extension of the file
        fileType = name.split(".")[-1]

        return fileType

    @staticmethod
    def getTableName(rollupFile: tarfile.TarInfo) -> str:
        """
        Returns the table name for the database of the tarInfo provided\n
        Parameters:\n
        rollupFile: a tarInfo instance\n
        """
        #separates the path into sections divided by "/"
        filePath = rollupFile.name.split("/")

        #obatains the path without /data and without the file name
        tableName = ""
        check = False
        for i in range(len(filePath)-1):
            if check:
                tableName += filePath[i]
            if check and i < len(filePath)-2:
                tableName += "/"
            if filePath[i] == "data":
                check = True 

        #creates a table for a file stored in the root directory
        if not tableName:
            tableName = "data"

        return tableName
    
    @staticmethod
    def getFileData(filePath: str, rollupFile: tarfile.TarInfo):
        """
        Returns a list of data to be sent to the database from a file\n
        Parameters:\n
        filePath: str\n
        rollupFile: a tarInfo instance\n
        """
        
        #Gets the file extension for the current file
        fileType = Reader.getFileType(rollupFile)

        #Will store the data needed for the database
        data = None
        
        #Calls the correct file reader to obtain data
        if fileType == "xml" or fileType == "nessus":
            data = XMLReader.getData(filePath)
        else:
            return []
        
        #gets the table name for the file
        tableName = Reader.getTableName(rollupFile)
        
        #calls a method to obtain usefull data from the current file
        return Reader.getRequestNodeList(data, tableName)
    
    @staticmethod
    def getRequestNodeList(data, tableName):
        if data == []:
            return []
        if tableName == "canvasmaps":
            return CanvasMapsReader.getRequestNodeList(data)
        elif tableName == "nmap":
            return NmapReader.getRequestNodeList(data)
        else:
            return [DatabaseRequestNode(data, "add", tableName)]


