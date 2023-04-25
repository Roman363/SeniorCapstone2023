import React, { Component } from "react";
import axios from "axios";
import "./ListNodeComponent.css";
import {
  ReactFlow,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";

function getUsers() {
  return axios.get("http://127.0.0.1:5000/networkNodes");
}

function getEdges() {
  return axios.get("http://127.0.0.1:5000/edges");
}

const minimapStyle = {
  height: 120,
};

class NetworkMapV3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
      edges: [],
    };
    //this.addUser = this.addUser.bind(this);
    //this.editUser = this.editUser.bind(this);
    //this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    getUsers().then((res) => {
      this.setState({ nodes: res.data });
      const [nodes, setNodes, onNodeChange] = useNodesState(res.data);
    });

    getEdges().then((res) => {
      this.setState({ edges: res.data });
      const [edges, setEdges, onEdgeChange] = useEdgesState(res.data);
    });
  }

  render() {
    return (
      <div class="networkMap" style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodesDraggable={true}
          nodesConnectable={true}
          nodes={this.state.nodes}
          edges={this.state.edges}
        >
          <MiniMap style={minimapStyle} zoomable pannable></MiniMap>
          <Controls></Controls>
          <Background color="red"> </Background>
        </ReactFlow>
      </div>
    );
  }
}
export default NetworkMapV3;
