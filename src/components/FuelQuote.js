import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserContext} from '../UserContext';


function FuelQuote() {

  // i was going to use these to save fields so we can use them to generate fuel quote
  const { user, setUser } = useContext(UserContext)
  const [gallons, setGallons] = useState(0)
  const [date, setDate] = useState("")
  const [total, setTotal] = useState("")


  




  return (
    <div>
      <h3>Fuel Quote Form</h3>
      <form>
        <div className="form-group">
          <label>Gallons Requested: </label>
          <input
            maxLength="50"
            type="text"
            pattern="[0-9]*"
            required
            className="form-control"
            onChange={(e) => setGallons(this.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>Delivery Address: </label>
          <input
            maxLength="100"
            type="text"
            required
            className="form-control"
            placeholder={user.address1 + 
              ' ' + user.address2 + 
              ' ' + user.city + 
              ', ' + user.state + 
              ' ' + user.zip}
            readOnly
          ></input>
        </div>
        <div className="form-group">
          <label>Delivery Date: </label>
          <DatePicker />
        </div>
        <div className="form-group">
          <label>Suggested Price: </label>
          <input
            type="text"
            className="form-control"
            value="From pricing module"
            readOnly
          ></input>
          {}
        </div>
        <div className="form-group">
          <label>Total amount due: </label>
          <input
            maxLength="50"
            type="text"
            pattern="[0-9]*"
            required
            className="form-control"
            value="123"
            readOnly
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

export default FuelQuote;

// - Gallons Requested (numeric, required)
// 	- Delivery Address (Non-editable, comes from client profile)
// 	- Delivery Date (Calender, date picker)
// 	- Suggested Price / gallon (numeric non-editable, price will be calculated by Pricing Module - we are not building pricing module yet)
// 	- Total Amount Due (numeric non-editable, calculated (gallons * price))
