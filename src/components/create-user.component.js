import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

    constructor(props){
        super(props)        //  call when defining constructor of a subclass

        //  binding "this" to each method so that "this" refers to the entire class inside of each method
        this.onChangeUserName = this.onChangeUserName.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)


        this.state = {      //  create variables in state so that they can be updated automatically
            username: "",   
            password: "",
            Confirmpassword:"",
            users: []
        }
    }

    onChangeUserName(e) {
        this.setState({
            username: e.target.value    //  set username to value of textbox
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value    //  set password to value of  textbox
        })
    }

    onChangeConfirmPassword(e) {
        this.setState({
            Confirmpassword: e.target.value    //  set Confirmpassword to value of  textbox
        })
    }

    onSubmit(e) {

        e.preventDefault() // prevent system from calling default submit action

        const user = {
            username: this.state.username,  //  set all values on submit
            password: this.state.password,
            Confirmpassword: this.state.Confirmpassword
        }

        console.log(user)

        axios.post('http://localhost:5500/users/add', user)
            .then(res => console.log(res.data))

        this.setState({
            username: "",
            password: "",
            Confirmpassword:""
        })
        //window.location = '/'
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}> 
                    <div className="form-group">
                        <label>Create Username: </label>
                        <input type="text" ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUserName}>
                            </input>
                    </div>
                    <div className="form-group">
                    <label>New Password: </label>
                        <input type="password" ref="userInput"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}>
                            </input>     
                    </div>
                    <div className="form-group">
                    <label>Confirm New Password: </label>
                        <input type="password" ref="userInput"
                            required
                            className="form-control"
                               value={this.state.Confirmpassword}
                               onChange={this.onChangeConfirmPassword}>
                            </input>     
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create New User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}