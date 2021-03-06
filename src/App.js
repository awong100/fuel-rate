import "./App.css";
import React, { useState, useMemo, Switch } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import CreateUser from "./components/create-user.component";
import Welcome from "./components/welcome.component";
import ManageUser from "./components/ManageUser";
import FuelQuote from "./components/FuelQuote";
import FuelHistory from "./components/fuel-history";
import { UserContext } from "./UserContext";
import UserLogin from "./components/UserLogin";

function App() {
  const [user, setUser] = useState(null)

  const value = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    
    <Router>
      
      
      
      <div className="container">      
      
      
      
        {/* <Navbar /> */}
        <br />
        <UserContext.Provider value={value}>
        {user ? (
          <Route component ={Navbar}/>
          ): null}
          <Route path="/" exact component={Welcome} />
          <Route path="/create" component={CreateUser} />
          <Route path="/login" component={UserLogin} />
          
          <Route path="/manage" component={ManageUser} />
          <Route path="/quote" component={FuelQuote} />
          <Route path="/quotes" component={FuelHistory} />
        </UserContext.Provider>
      </div>
      <h3 hidden={true} value="/learn react/i">/learn react/i</h3>
      

    </Router>
  );
}

export default App;
