import React, { Component } from 'react'
// import CreateUser from './create-user.component'
import { Link } from 'react-router-dom'
// import UserLogin from './UserLogin'

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <div className="centered" name="title">
                    <h2 style={{ color: 'white' }}>TAG FUEL</h2>
                </div>
                <div className="centered">
                    <h3 style={{ color: 'white' }}>Welcome</h3>
                </div>
                <div className="centered">
                    <h4 style={{ color: 'white' }}>This is our Fuel Quote Webapp</h4>
                </div>
                    <div className="centered">
                        {'\n'}
                        <Link id="login-link" to="/login" className="btn btn-primary">Login</Link>
                        &nbsp;&nbsp;
                        <Link id="create-link" to="/create" className="btn btn-primary">Register</Link>
                    </div>


            </div>
        )
    }
    // <UserLogin />
    // <CreateUser />
}