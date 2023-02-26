#https://docs.python.org/3/library/tarfile.html
import tarfile

#Opens up the rollup as a tarfile object
file = tarfile.open("C:\Users\ralex\Downloads\20221027-144534-SQ.tar.gz")
#Prints list of files inside ot the tarfile object
file.list()

#returns list of files as tarinfo objects
#files = file.getmembers("canvasmaps")

#print(files)

#file.extractall()

files = file.getmember("data/canvasmaps")
print(files.isdir())


#closes the tarfile
file.close()