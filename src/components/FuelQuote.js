import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserContext} from '../UserContext';
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios"

function FuelQuote() {



  // i was going to use these to save fields so we can use them to generate fuel quote
  const { user, setUser } = useContext(UserContext)
  const [gallons, setGallons] = useState("")
  const [total, setTotal] = useState("")
  const [deliveryDate, setDeliveryDate] = useState(new Date())

  const currentPrice = 1.50
  const [suggestedPrice, setSuggestedPrice] = useState("")

  let history = useHistory()
  // console.log(user)

  const calculateSuggestedPrice = () => {
    // do some calculations on current price to get suggested price
  }

  // console.log(useLocation())

  const handleSubmit = (e) => {
    e.preventDefault(); // this is to prevent auto reload page
    setTotal(currentPrice * gallons)


    const quote = {
      id: user._id,
      date: String(deliveryDate),
      price: Number(currentPrice),
      gallons: gallons,
      total: String(currentPrice * gallons),
      address: user.address1 + ' ' + user.address2,
      city: user.city,
      state: user.state,
      zip: user.zip
    }  

    console.log(quote)

    // axios.post('http://localhost:5500/quotes/add', quote)
    //   .then(res => console.log(res.data)) 
      
    axios({
      method: 'post',
      url: 'http://localhost:5500/quotes/add', 
      data: {
        id: user._id,
        date: String(deliveryDate),
        price: Number(currentPrice),
        gallons: gallons,
        total: String(currentPrice * gallons),
        address: user.address1 + ' ' + user.address2,
        city: user.city,
        state: user.state,
        zip: user.zip
      }
    }).then((res) => console.log(res.data))

    // history.push('/quotes')

  }


  return (
    <div>
      <h3>Fuel Quote Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Gallons Requested: </label>
          <input
            maxLength="50"
            type="numeric"
            pattern="[0-9]*"
            required
            className="form-control"
            onChange={(e) => setGallons(e.target.value)}
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
          <DatePicker
            selected = {deliveryDate}
            onChange={date => setDeliveryDate(date)}/>
        </div>
        <div className="form-group">
          <label>Suggested Price: </label>
          <input
            type="text"
            className="form-control"
            value={currentPrice}
            readOnly
          ></input>
        </div>
        <div className="form-group">
          <label>Total amount due: </label>
          <input
            maxLength="50"
            type="text"
            pattern="[0-9]*"
            required
            className="form-control"
            value={currentPrice * gallons}
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
