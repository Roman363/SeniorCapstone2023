"""
Module dedicated to read XML Files
"""
import xmltodict

class XMLReader:

    @staticmethod
    def getData(filePath: str) -> list[dict()]:
        """
        Returns data for the provided xml file\n
        Parameters:\n
        filePath: the path for an xml file\n
        Return:\n
        A list of dictionaries containing the data found in the xml
        """
        try:
            with open(filePath, 'r', encoding='utf-8') as file:
                my_xml = file.read()

            data = xmltodict.parse(my_xml)
            
        except:
            data = None
        
        file.close()

        return [data] if data else []
