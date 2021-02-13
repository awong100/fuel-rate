import React, { Component } from 'react'
import CreateUser from "./components/create-user.component"

export default class Welcome extends Component {
    
    render() {
        return (
            <div>
                <h2>Welcome</h2>
                <CreateUser />
            </div>
        )
    }
}