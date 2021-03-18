import React, { Component } from "react";
// import DatePicker from 'react-datepicker'
// import "react-datepicker/dist/react-datepicker.css"
import axios from "axios";
import { Redirect } from "react-router-dom";
import ManageUser from "./ManageUser";
import { withRouter } from 'react-router-dom'

export default class UserLogin extends Component {
  constructor(props) {
    super(props); //  call when defining constructor of a subclass

    //  binding "this" to each method so that "this" refers to the entire class inside of each method
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      //  create variables in state so that they can be updated automatically
      username: "",
      password: "",
      users: [],
      isLoggedIn: false,
    };
  }

  // should run before anything else on each reload
  componentDidMount() {
    axios
      .get("http://localhost:5500/users/")
      .then((response) => {
        this.setState({
          users: response.data,
        });
        //  console.log(this.state.users)
      })
      .catch((err) => {
        console.log(`Error: ` + err);
      });
  }

  onChangeUserName(e) {
    this.setState({
      username: e.target.value, //  set username to value of textbox
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value, //  set password to value of  textbox
    });
  }

  onSubmit(e) {
    e.preventDefault(); // prevent system from calling default submit action

    const user = {
      username: this.state.username, //  set all values on submit
      password: this.state.password,
    };

    console.log(user);

    let idlist = [];
    let nameslist = [];
    let passlist = [];
    let currentObjId = ``;

    for (let i = 0; i < this.state.users.length; i++) {
      idlist.push(this.state.users[i]._id);
      nameslist.push(this.state.users[i].username);
      passlist.push(this.state.users[i].password);
    }

    //  console.log(idlist, nameslist, passlist)
    let index = -1;

    if (nameslist.includes(user.username)) {
      index = nameslist.indexOf(String(this.state.username));
      try {
        if (
          user.username === nameslist[index] &&
          user.password === passlist[index]
        ) {
          currentObjId = idlist[index];
          console.log(`LOGIN SUCCESS!`);
          this.props.history.push('/create');
        //   this.setState({ redirect: true })
        } else {
          console.log(`error!`);
        }
      } catch {
        console.log(`Error: `);
      }
    }

    //  console.log(`username found at position: ` + index)
    //  console.log(`Current object id: ` + currentObjId)

    try {
      if (currentObjId !== ``) {
        axios
          .get("http://localhost:5500/users/" + currentObjId)
          .then((res) => {
            this.setState = {
              username: res.data.username,
              password: res.data.password,
            };

            //  console.log(`USER`, res.data)
          })
          .catch((err) => {
            console.log(`Error: ` + err);
          });
      } else {
        // default error
        console.log(`LOGIN UNSUCCESSFUL: NOT A REGISTERED USER`);
      }
    } catch {
      console.log(`ERROR`);
    }

    // if (this.state.username in this.state.users) {
    //     try{
    //         if (this.password === this.users[this.username].password){
    //             //TODO
    //             console.log(`login successful!`)
    //             window.location = '/users'
    //         }
    //         else{
    //             console.log(`NOPE!`)
    //         }
    //     }catch(err){
    //         console.log(`Error: ` + err)
    //     }
    // }

    this.setState({
      username: "",
      password: "",
      isLoggedIn: false,
    });

    window.location = "/";
  }

  render() {
    // const { isLoggedIn } = this.state;

    // if (isLoggedIn) {
    //   return <Redirect to='/manage'/>;
    // }
    return (
      <div>
        <h3>Existing User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUserName}
            ></input>
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="text"
              ref="userInput"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            ></input>
          </div>
          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </form>
        {/* <div>{this.state.isLoggedIn ? <Redirect to="/manage" /> : null}</div> */}
      </div>
    );
  }
}
