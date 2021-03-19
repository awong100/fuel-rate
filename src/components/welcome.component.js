import React, { Component } from 'react'
import CreateUser from './create-user.component'
import { Link } from 'react-router-dom'
import UserLogin from './UserLogin'

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <h2>TAG FUEL</h2>
                <h3>Welcome</h3>
                <h4>This is our Fuel Quote Webapp</h4>
                <div>
                    <Link to="/login" className="btn btn-primary">Login</Link>
                </div>
                <h1></h1>
                <div>
                    <Link to="/create" className="btn btn-primary">Register</Link>
                </div>
                
                
            </div>
        )
    }
    // <UserLogin />
    // <CreateUser />
}