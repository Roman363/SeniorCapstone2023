"""
Module dedicated to extract the rollup file
"""
import tarfile, os, shutil

class RollupExtractor:
    """
    Class dedicated to extract the rollup file
    """
    _parentDirectory = None
    _rollupParentDirectory = None
    _unfilteredExtractedRollupDirectory = None
    _filteredExtractedRollupDirectory = None
    _zippedRollupDirectory = None
    
    @staticmethod
    def setUp():
        """
        Sets up a connection with the database with the information provided in database.yaml\n
        """
        #Sets the parent directory
        RollupExtractor._parentDirectory = os.path.dirname(__file__)
        #Sets the rollup directory
        RollupExtractor._rollupParentDirectory = os.path.join(os.path.dirname(RollupExtractor._parentDirectory), "RollupData")
        #Sets the extracted unfiltered rollup directory  
        RollupExtractor._unfilteredExtractedRollupDirectory = os.path.join(RollupExtractor._rollupParentDirectory, "UnfilteredData")
        #Sets the extracted filtered rollup directory  
        RollupExtractor._filteredExtractedRollupDirectory = os.path.join(RollupExtractor._rollupParentDirectory, "FilteredData")

        #Gets list with the rollup name
        fileList = os.listdir(RollupExtractor._rollupParentDirectory)

        #filters the name that ends in "tar.gz"
        zippedRollupName = [file for file in fileList if file.endswith("tar.gz")].pop()
        print(zippedRollupName)

        #Gets path to the zipped rollup
        RollupExtractor._zippedRollupDirectory = os.path.join(RollupExtractor._rollupParentDirectory, zippedRollupName)

    @staticmethod
    def extractUnfilteredRollupFiles():
        """
        Extracts the unfiltered files from the zipped rollup in the "RollupData" directory
        """
        #Opens up the rollup as a tarfile object
        rollupTarFile = tarfile.open(RollupExtractor._zippedRollupDirectory)

        #gets the tarinfo files of every file inside the rollup
        rollupMembers = rollupTarFile.getmembers()

        for member in rollupMembers:
            #extracts all the files
            rollupTarFile.extract(member,RollupExtractor._unfilteredExtractedRollupDirectory)
        
        #Closes up the rollup tarfile object
        rollupTarFile.close()

    @staticmethod
    def extractFilteredRollupFiles():
        """
        Extracts the filtered files from the zipped rollup in the "RollupData" directory
        """
        #Opens up the rollup as a tarfile object
        rollupTarFile = tarfile.open(RollupExtractor._zippedRollupDirectory)

        #gets the tarinfo files of every file inside the rollup
        rollupMembers = rollupTarFile.getmembers()

        #creates a list with only files and no directories
        filteredMembers = [member for member in rollupMembers if member.isfile()]

        for member in filteredMembers:
            #extracts all the files
            rollupTarFile.extract(member,RollupExtractor._filteredExtractedRollupDirectory)
        
        #Closes up the rollup tarfile object
        rollupTarFile.close()

    @staticmethod
    def deleteUnfilteredRollupFiles():
        """
        Deletes the files from the unfiltered extracted rollup
        """
        unfilteredExtractedRollupDirectory = RollupExtractor._unfilteredExtractedRollupDirectory

        if os.path.exists(unfilteredExtractedRollupDirectory) and os.path.isdir(unfilteredExtractedRollupDirectory):
            shutil.rmtree(unfilteredExtractedRollupDirectory)

    @staticmethod
    def deleteFilteredRollupFiles():
        """
        Deletes the files from the filtered extracted rollup
        """
        filteredExtractedRollupDirectory = RollupExtractor._filteredExtractedRollupDirectory

        if os.path.exists(filteredExtractedRollupDirectory) and os.path.isdir(filteredExtractedRollupDirectory):
            shutil.rmtree(filteredExtractedRollupDirectory)

    @staticmethod
    def extractRollup(unfiltered: bool, filtered: bool):
        """
        Function that extracts the selected versions of the rollup
        """

        if unfiltered:
            RollupExtractor.extractUnfilteredRollupFiles()

        if filtered:
            RollupExtractor.extractFilteredRollupFiles()
        
        

    @staticmethod
    def deleteExtractedRollup(unfiltered: bool, filtered: bool):
    
        if unfiltered:
            RollupExtractor.deleteUnfilteredRollupFiles()

        if filtered:
            RollupExtractor.deleteFilteredRollupFiles()

    @staticmethod
    def getParentDirectory():
        return RollupExtractor._parentDirectory
    
    @staticmethod
    def getRollupParentDirectory():
        return RollupExtractor._rollupParentDirectory
    
    @staticmethod
    def getUnfilteredExtractedRollupDirectory():
        return RollupExtractor._unfilteredExtractedRollupDirectory
    
    @staticmethod
    def getFilteredExtractedRollupDirectory():
        return RollupExtractor._filteredExtractedRollupDirectory
    
    @staticmethod
    def getZippedRollupDirectory():
        return RollupExtractor._zippedRollupDirectory
    
#RollupExtractor.setUp()
#RollupExtractor.extractRollup(unfiltered=True, filtered=True)
#RollupExtractor.deleteExtractedRollup(unfiltered=True, filtered=True)