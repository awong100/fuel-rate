import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Login/Register
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/manage" className="nav-link">
                Manage Account
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/quote" className="nav-link">
                Quote Form
              </Link>
            </li>
              <li className="navbar-item">
                <Link to="/history" className="nav-link">
                  User History
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
