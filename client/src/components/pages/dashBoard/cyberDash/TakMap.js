import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";
import axios from 'axios';
import "./ListNodeComponent.css";

function GetIcon(icon_size)
{
  return L.icon({
    iconUrl: require("./images/marker-icon.png"),
    iconSize: [icon_size]
  })
}

function getTraffic(){
  return axios.get('http://127.0.0.1:5000/traffic')
      
}

class ListTakComponent extends Component {
  constructor(props) {
      super(props)
      this.state = {
          nodes: []
      }
      //this.addUser = this.addUser.bind(this);
      //this.editUser = this.editUser.bind(this);
      //this.deleteUser = this.deleteUser.bind(this);
  }
  
  
  componentDidMount() {
      getTraffic().then((res) => {
          this.setState({ nodes: res.data });
      });
  }

render() {
  const position = [31.772787, -106.203669269];
  
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

  {this.state.nodes.map(node => <Marker position={[node.lat, node.lon]} icon={GetIcon(20)}><Popup>UID: {node.id}</Popup></Marker>)}
    </MapContainer>
    );
  }
}
export default ListTakComponent;