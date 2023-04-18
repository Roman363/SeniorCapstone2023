import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";

function GetIcon(icon_size)
{
  return L.icon({
    iconUrl: require("./images/marker-icon.png"),
    iconSize: [icon_size]
  })
}

function TakMap() {
  const position = [31.76, 253.50];
  
  return (
    <MapContainer
      className="map"
      center={position}
      zoom={13}
      style={{ height: 500, width: "100%" }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

<Marker position={[31.76, 253.50]} icon = {GetIcon(20)}>
        <Popup>
            This is the Popup
          
        </Popup>
        </Marker>
    </MapContainer>
  );
}

export default TakMap;