import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios' //    used to connect to mongoDB

const User = props => (         //  functional component to store a user row // need to turn the delete into a button
    <tr>
        <td>{props.user.username}</td>
        <td>{props.user.password}</td>
        <td>
        <Link to={"/edit/"+props.user._id}>edit</Link> | <a href="#" onClick={() => { props.deleteUser(props.user._id ) }}>delete</a>
        </td>
    </tr>
)

export default class UserList extends Component {
    constructor(props) {
        super(props)

        this.deleteUser = this.deleteUser.bind(this)

        this.state = {users: []}
    }

    componentDidMount() {
        axios.get('http://localhost:5500/users/')
            .then(response => {
                this.setState({
                    users: response.data
                })
            })
            .catch((err) => {
                console.log(`Error: ` + err)
            })
    }

    deleteUser(id) {
        axios.delete('http://localhost:5500/users/' + id)
            .then(res => console.log(res.data))

        this.setState({
            users: this.state.users.filter(el => el._id !== id) //  users = users - users[id] ... using filter method
        })
    }

    userList() {
        return this.state.users.map(currentUser => {
            return <User user ={currentUser} deleteUser={this.deleteUser} key={currentUser._id}/>
        })
    }
 
    render() {
        return (
            <div>
                <h3 style={{ color: 'white' }}>Users List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody style={{ color: 'white' }}>
                        { this.userList() }
                    </tbody>
                </table>
            </div>
        )
    }
}