import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

function TakMap() {
  const position = [1.35, 103.8];
  
  return (
    <MapContainer
      className="map"
      center={position}
      zoom={10}
      style={{ height: 500, width: "100%" }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default TakMap;