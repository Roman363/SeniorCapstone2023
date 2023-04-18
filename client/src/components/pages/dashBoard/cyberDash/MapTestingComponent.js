import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";
import React from "react";


function GetIcon(icon_size)
{
  return L.icon({
    iconUrl: require("./images/marker-icon.png"),
    iconSize: [icon_size]
  })
}

function MapTestingComponent() {

  const default_position = [31.76, 253.50]
  return (
    <MapContainer center={[31.76, 253.50]} zoom={13} style={{ height: '100vh' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={[31.76, 253.50]} icon = {GetIcon(20)}>
        <Popup>
            This is the Popup
          
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapTestingComponent