import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from '../UserContext'

function Navbar() {

  const { user, setUser } = useContext(UserContext)
  
    return (
      
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          SD Project 1
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
          {user ? (
            <li className="navbar-item">
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </li>
            ): null}
            



            {user ? (
            <li className="navbar-item">
              <Link to="/manage" className="nav-link">
                Manage User
              </Link>
            </li>
            ): null}
             {user ? (
            <li className="navbar-item">
              <Link to="/quote" className="nav-link">
                Quote Form
              </Link>
            </li>
            ): null}
            {user ? (
              <li className="navbar-item">
                <Link to="/quotes" className="nav-link">
                  History
                </Link>
            </li>
            ): null}
            
          </ul>
        </div>
      </nav>
    );
  }


export default Navbar;
