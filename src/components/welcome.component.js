import React, { Component } from 'react'
import CreateUser from './create-user.component'
import UserLogin from './user-login.component'

export default class Welcome extends Component {
    
    render() {
        return (
            <div>
                <h2>Welcome</h2>
                <UserLogin />
                <CreateUser />
            </div>
        )
    }
}