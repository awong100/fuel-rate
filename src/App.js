import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import UserList from "./components/user-list.component";
import CreateUser from "./components/create-user.component";
import EditUser from "./components/edit-user.component";
import Welcome from "./components/welcome.component";
import ManageUser from "./components/ManageUser";
import FuelQuote from "./components/FuelQuote";
import Fuelhistory from "./components/fuel-history";
//import Loginscreen from './Login.js'



function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={Welcome} />
        <Route path="/edit/:id" component={EditUser} />
        <Route path="/users/" exact component={UserList} />
        <Route path="/create/" component={CreateUser} />
        <Route path="/manage" component={ManageUser} />
        <Route path="/quote" component={FuelQuote} />
        <Route path="/history" component={Fuelhistory} />
      </div>
    </Router>
  );
}

export default App;
