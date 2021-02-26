import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function fuelQuote() {
  return (
    <div>
      <h3>Fuel Quote Form</h3>
      <form>
        <div className="form-group">
          <label>Gallons Requested: </label>
          <input
            maxlength="50"
            type="text"
            pattern="[0-9]*"
            required
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <label>Delivery Address: </label>
          <input
            maxlength="100"
            type="text"
            required
            className="form-control"
            placeholder="123 Address Ln."
          ></input>
        </div>
        <div className="form-group">
          <label>Delivery Date: </label>
          <DatePicker></DatePicker>
        </div>
        <div className="form-group">
          <label>Suggested Price: </label>
          <input
            type="text"
            className="form-control"
            value="From pricing module"
            readonly
          ></input>
          {}
        </div>
        <div className="form-group">
          <label>Total amount due: </label>
          <input
            maxlength="50"
            type="text"
            pattern="[0-9]*"
            required
            className="form-control"
            value="123"
          ></input>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Get your Quote"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default fuelQuote;

// - Gallons Requested (numeric, required)
// 	- Delivery Address (Non-editable, comes from client profile)
// 	- Delivery Date (Calender, date picker)
// 	- Suggested Price / gallon (numeric non-editable, price will be calculated by Pricing Module - we are not building pricing module yet)
// 	- Total Amount Due (numeric non-editable, calculated (gallons * price))
