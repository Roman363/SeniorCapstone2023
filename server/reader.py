#https://docs.python.org/3/library/tarfile.html
import tarfile

#Opens up the rollup as a tarfile object
file = tarfile.open(r"C:\Users\ralex\Downloads\20221027-144534-SQ.tar.gz")
#Prints list of files inside ot the tarfile object
#file.list()

#returns list of files as tarinfo objects
files = file.getmembers()

print(files)

#closes the tarfile
file.close()