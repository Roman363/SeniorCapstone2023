import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React from "react";



function MapTestingComponent() {

  return (
    <MapContainer center={[31.76, 253.50]} zoom={13} style={{ height: '100vh' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={[31.76, 253.50]}>
        <Popup>
            This is the Popup
          
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapTestingComponent