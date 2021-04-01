import "./App.css";
import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import UserList from "./components/user-list.component";
import CreateUser from "./components/create-user.component";
import EditUser from "./components/edit-user.component";
import Welcome from "./components/welcome.component";
import ManageUser from "./components/ManageUser";
import FuelQuote from "./components/FuelQuote";
import FuelHistory from "./components/fuel-history";
import { UserContext } from "./UserContext";
import UserLogin from "./components/UserLogin";
import QuoteCalc from "./components/quoteCalc";

function App() {
  const [user, setUser] = useState(null)

  const value = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <UserContext.Provider value={value}>
          <Route path="/" exact component={Welcome} />
          <Route path="/create" component={CreateUser} />
          <Route path="/login" component={UserLogin} />
          <Route path="/edit/:id" component={EditUser} />

          <Route path="/users/" component={UserList} />
          
          <Route path="/manage" component={ManageUser} />
          <Route path="/quote" component={FuelQuote} />
          <Route path="/quotes" component={FuelHistory} />
          <Route path="/calc" component = {QuoteCalc} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
