import React, { Component } from 'react'
import CreateUser from './create-user.component'
import { Link } from 'react-router-dom'
import UserLogin from './UserLogin'

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <div class="centered">
                    <h2>TAG FUEL</h2>
                </div>
                <div className="centered">
                    <h3>Welcome</h3>
                </div>
                <div className="centered">
                    <h4>This is our Fuel Quote Webapp</h4>
                </div>
                    <div className="centered">
                        {'\n'}
                        <Link to="/login" className="btn btn-primary">Login</Link>
                        &nbsp;&nbsp;
                        <Link to="/create" className="btn btn-primary">Register</Link>
                    </div>
                

            </div>
        )
    }
    // <UserLogin />
    // <CreateUser />
}