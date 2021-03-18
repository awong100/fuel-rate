import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function UserLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault(); // this is to prevent auto reload page

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
        // TODO: get use userObj.ID, set that in global store using react hooks redux
        history.push("/manage");
      }
    });
  };

  return (
    <div>
      <h3>Existing User</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input
            type="text"
            required
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <input type="submit" value="Login" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default UserLogin;
