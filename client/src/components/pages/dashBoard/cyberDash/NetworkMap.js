import React, { Component } from 'react'
import axios from 'axios';


function getMaps(){
  return axios.get('http://127.0.0.1:5000/Nmap')
      
}




class NetworkMap extends Component {
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
      getMaps().then((res) => {
          this.setState({ nodes: res.data });
      });
  }


  



  render() {
      return (

          <div>
              <h2 className="text-center">Node List</h2>
              
              <br></br>
              <div className="row">
                  <table className="table table-striped table-bordered">
                      <thead>
                          <tr>
                              <th> IP</th>
                              <th> Scanner</th>
                              
                          </tr>
                      </thead>
                      <tbody>
                          {
                              this.state.nodes.map(
                                  node =>
                                      <tr key={node.id}>
                                          <td> {node.ip} </td>
                                          <td> {node.scanner}</td>
                    
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

export default NetworkMap;
