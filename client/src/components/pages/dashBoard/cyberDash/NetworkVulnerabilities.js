import React, { Component } from 'react'
import axios from 'axios';
import "./ListNodeComponent.css";




function getUsers(){
    return axios.get('http://127.0.0.1:5000/canvasipnodes2')
        
}




class NetworkVulnerabilities extends Component {
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
        getUsers().then((res) => {
            this.setState({ nodes: res.data });
        });
    }


    



    render() {
        return (
            
            <div>
                <h2 className="text-center">Nmap List</h2>
                
                <br></br>
                <div className="table-wrapper">
                <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> IP</th>
                                <th> Nmap OS</th>
                                <th> Open Ports</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.nodes.map(
                                    node =>
                                        <tr key={node.id}>
                                            <td> {node.ip} </td>
                                            <td> {node.nmap}</td>
                                            <td> {node.openports.map(item => <li>${item}</li>)}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default NetworkVulnerabilities
