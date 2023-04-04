"""
Module dedicated to read PCAPNG Files
"""

from takprotobuf import parseProto

import os, sys

sys.path.append(os.path.dirname(os.path.dirname(__file__)))

from RollupIngestion.rollupExtraction import *
from scapy.all import *


class PcapReader:

    @staticmethod
    def getData(filePath: str) -> list[dict()]:
        """
        Returns data for the provided xml file\n
        Parameters:\n
        filePath: the path for an Pcap file\n
        Return:\n
        A list of dictionaries containing the data found in the xml
        """
        #print("aaaa")
        data = {}
        #print(filePath)
        packetList = rdpcap(filePath)
        ports = [6969]
        filtered = (pkt for pkt in packetList if "UDP" in pkt and (pkt["UDP"].sport in ports or pkt["UDP"].dport in ports))

        count = 0
        #print("222")
        for packet in filtered:
            #print(packet.fields)
            #packet.show()
            
            if "type" in packet.fields and packet.fields['type'] == 2048:
                
                
                packetProto = parseProto(packet[Raw].load)
                
                packetData = {}

                packetData["type"] = packetProto.cotEvent.type
                packetData["uid"] = packetProto.cotEvent.uid
                packetData["sendTime"] = packetProto.cotEvent.sendTime
                packetData["startTime"] = packetProto.cotEvent.startTime
                packetData["staleTime"] = packetProto.cotEvent.staleTime
                packetData["how"] = packetProto.cotEvent.how
                packetData["lat"] = packetProto.cotEvent.lat
                packetData["lon"] = packetProto.cotEvent.lon
                packetData["hae"] = packetProto.cotEvent.hae
                packetData["ce"] = packetProto.cotEvent.ce
                packetData["le"] = packetProto.cotEvent.le

                data[str(count)] = packetData
                count += 1
                
        return [data] if data != {} else []



                



                
          


        


