import React, { Component } from 'react'
// import DatePicker from 'react-datepicker'
// import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios'

export default class UserLogin extends Component {

    constructor(props){
        super(props)        //  call when defining constructor of a subclass

        //  binding "this" to each method so that "this" refers to the entire class inside of each method
        this.onChangeUserName = this.onChangeUserName.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)


        this.state = {      //  create variables in state so that they can be updated automatically
            username: "",   
            password: "",
            users: []
        }
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

    onSubmit(e) {

        e.preventDefault() // prevent system from calling default submit action

        const user = {
            username: this.state.username,  //  set all values on submit
            password: this.state.password
        }

        console.log(user)

        axios.get('http://localhost:5500/users/' + user.username)
            .then(res => console.log(res.data))
            .catch((err) => {console.log(`Error: ` + err)})

        this.setState({
            username: "",
            password: ""
        })
        window.location = '/'
    }

    render() {
        return (
            <div>
                <h3>Existing User</h3>
                <form onSubmit={this.onSubmit}> 
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUserName}>
                            </input>
                    </div>
                    <div className="form-group">
                    <label>Password: </label>
                        <input type="text" ref="userInput"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}>
                            </input>     
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}