"""
Module dedicated to read the rollup file
"""
import tarfile
from databaseConnector import *
import xmlReader, os, shutil

#returns a set of tarInfo that are not directories
def getFiles(tarFile: tarfile.TarFile) -> list[tarfile.TarInfo]:
    """
    Returns a list of tarInfo instances that are not directories\n
    Parameters:\n
    tarFile: A tarFile instance\n
    Returns:\n
    A list containing tarInfo instances without directories inside of the TarFile provided
    """
    #gets all the files inside the tar file including directories
    tarMembers = tarFile.getmembers()

    #creates a set to store the actual files
    infoList = []

    for member in tarMembers:
        #checks if a TarInfo is a file and not a directory
        if member.isfile():
            infoList.append(member)
    

    return infoList

def getTableName(tarInfo: tarfile.TarInfo) -> str:
    """
    Returns the table name for the database of the tarInfo provided\n
    Parameters:\n
    tarInfo: a tarInfo instance\n
    Return:\n
    A string with the table name 
    """
    #separates the path into sections divided by "/"
    path = tarInfo.name.split("/")

    #obatains the path without /data and without the file name
    tableName = ""
    for i in range(1,len(path)-1):
        tableName += path[i]
        if i < len(path)-2:
            tableName += "/"

    #creates a table for a file stored in the root directory
    if not tableName:
        tableName = "data"

    return tableName

def getFileType(tarInfo: tarfile.TarInfo()) -> str:
    """
    Returns the file type for the tarInfo provided\n
    Parameters:\n
    tarInfo: a tarInfo instance\n
    Return:\n
    A string with the file type 
    """
    #separates the path into sections divided by "/"
    path = tarInfo.name.split("/")

    #obtains the actual name of the file
    name = path[-1]

    #obtains the extension of the file
    fileType = name.split(".")[-1]

    return fileType

def extractFiles(tarFile: tarfile.TarFile, infoList: list[tarfile.TarInfo], path):
    """
    Extracts selected tarfiles instances to a physical location
    Parameters:\n
    tarFile: a tarFile instance\n
    infoList: A list containing tarInfo instances\n
    path: a path where the extracted files will be located
    """
    for member in infoList:
        tarFile.extract(member, path)

def sendToDatabase(infoList: list[tarfile.TarInfo], absolute_path) -> None:
    """
    Sends the files provided in the infoList to the database\n
    Parameters:\n
    infoList: A list containing tarInfo instances directories inside of the TarFile provided
    absolute_path: path containing where the files actually are
    """

    for infoFile in infoList:
        
        #Gets the table name for the current file
        tableName = getTableName(infoFile)

        #Gets the file extension for the current file
        fileType = getFileType(infoFile)

        #Gets the file path to open it
        path = absolute_path + "/" + infoFile.path 

        #Will store the data needed for the database
        data = None
        
        if fileType == "xml" or fileType == "nessus":
            data = xmlReader.getData(path)
        else:
           continue 
                    
        #If data was not found or unreadable then skip the file
        if len(data) == 0:
            print("Couldn't read file: " + infoFile.path)
            continue
        
        #Creates a request node with the current tar info
        requestNode = DatabaseRequestNode(data, "add", tableName)

        #Sends the node to be added to the database
        DatabaseConnection.request(requestNode)

def deleteExtractedFiles(path):
    """
    Deletes the files extracted from the rollup
    Paramater:
    Path: path for the directory where the extraction of files occured
    """
    if os.path.exists(path) and os.path.isdir(path):
        shutil.rmtree(path)

def extractAllFiles(rollupPath, extractionPath):
    """
    Deletes the files extracted from the rollup
    Paramater:
    rollupPath: path for the rollup file
    extractionPath: path for the directory where the extraction of files occured
    """

    #Opens up the rollup as a tarfile object
    tarFile = tarfile.open(rollupPath)
    #extracts all the files
    tarFile.extractall(extractionPath)

def main(path, rollupPath):
    """
    Paramater:
    Path: path for the directory of the code
    rollupPath: path of the rollupFile
    """
    #Connects to the database
    DatabaseConnection.setUp(path)

    #Opens up the rollup as a tarfile object
    tarFile = tarfile.open(rollupPath)

    #obtains all the actual files
    infoList = getFiles(tarFile)

    #path where files will be extracted to
    extractionPath = path + "\\data"
    
    #extract the needed files
    extractFiles(tarFile, infoList, path)

    #Sends the files to the database to their respective tables
    sendToDatabase(infoList, path)

    deleteExtractedFiles(extractionPath)

absolute_path = os.path.dirname(__file__)

#change this to the local rollup path
rollupPath = r"C:\Users\anton\Documents\20221027-144534-SQ.tar.gz"

#extractAllFiles(rollupPath, absolute_path)
main(absolute_path, rollupPath)

