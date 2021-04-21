import React, { useState } from "react";
import { useHistory, Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useContext } from 'react'
import { UserContext } from '../UserContext'

function UserLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const { user, setUser } = useContext(UserContext)

  // console.log(useLocation())

  const handleSubmit = (e) => {
    e.preventDefault(); // this is to prevent auto reload page

    // change this to a get call?
    

    axios({
      method: "post",
      url: "http://localhost:5500/users/login",
      data: {
        username: username,
        password: password,
      },
    }).then(function (response) {
      if (response.status === 200 && response.data) {
        const userObj = response.data;
        console.log(`userObj: ` + userObj)
        // TODO: get use userObj.ID, set that in global store using react hooks redux
        // const user = userObj
        setUser(userObj)
        if (!userObj.name) {
          history.push("/manage");
        }
        else{
          history.push("/quote")
        }

        // history.push("/manage");
      }
    });
  };

  return (
    <div>
      <h3>Existing User</h3>
      <form onSubmit={handleSubmit} name="login-form">
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            name="username-textbox"
            required
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input
            type="password"
            name="password-textbox"
            required
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <input name="login-btn" type="submit" value="Login" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default UserLogin;
