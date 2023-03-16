import React, { Component } from 'react'
import axios from 'axios';


function getUsers(){
    return axios.get('http://127.0.0.1:5000/users')
        
}


class ListUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        //this.addUser = this.addUser.bind(this);
        //this.editUser = this.editUser.bind(this);
        //this.deleteUser = this.deleteUser.bind(this);
    }
    
    
    componentDidMount() {
        getUsers().then((res) => {
            this.setState({ users: res.data });
        });
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Users List</h2>
                
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> User First Name</th>
                                <th> User Last Name</th>
                                <th> User Email Id</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td> {user.firstName} </td>
                                            <td> {user.lastName}</td>
                                            <td> {user.emailId}</td>
                                            <td>

                                            </td>
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
export default ListUserComponent