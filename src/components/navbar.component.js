import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          SD Project 1
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Create User
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/manage" className="nav-link">
                Manage User
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/quote" className="nav-link">
                Quote Form
              </Link>
            </li>
              <li className="navbar-item">
                <Link to="/quotes" className="nav-link">
                  History
                </Link>
            </li>
            <li className="navbar-item">
              <Link to="/calc" className="nav-link">
                Calc
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
