import React from "react";

function fuelQuote() {
  return (
    <div>
      <h3>Manage User</h3>
      <form>
        <div className="form-group">
          <label>Full Name: </label>
          <input
            maxlength="50"
            type="text"
            required
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <label>Address 1: </label>
          <input
            maxlength="100"
            type="text"
            required
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <label>Address 2: </label>
          <input maxlength="100" type="text" className="form-control"></input>
        </div>
        <div className="form-group">
          <label>City: </label>
          <input type="text" required className="form-control"></input>
        </div>
        <div className="form-group">
          <label>State: </label>
          <select type="text" required className="form-control"></select>
        </div>
        <div className="form-group">
          <label>Zipcode: </label>
          <input
            minlength="5"
            maxlength="9"
            type="text"
            required
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <input type="submit" value="Edit User" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default fuelQuote;
