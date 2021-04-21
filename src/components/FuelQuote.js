import React, { useState, useContext, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserContext} from '../UserContext';
import { useHistory } from "react-router-dom";
import axios from "axios"

function FuelQuote() {



  // i was going to use these to save fields so we can use them to generate fuel quote
  const { user, setUser } = useContext(UserContext)
  const [gallons, setGallons] = useState("")
  const [total, setTotal] = useState("")
  const [deliveryDate, setDeliveryDate] = useState(new Date())

  // pricing module stuff
  let base_price = 1.50
  const [loc_factor, setLocFactor] = useState(0.4)
  const [rate_history, setRateHistory] = useState(0.0)
  const [gallons_factor, setGallonsFactor] = useState(0.3)
  let company_profit_factor = 0.1

  const [suggestedPrice, setSuggestedPrice] = useState("")

  let history = useHistory()
  // console.log(user)


  useEffect(() => {
    if (user.state === 'TX'){
      setLocFactor(0.2)
    }

    axios.get('http://localhost:5500/quotes/' + user._id)
      .then(response => {
        if (response.data.length > 0){
          setRateHistory(0.1)
        }
      })
      .catch((err) => {
        console.log(`Error: ` + err)
      })
    
    if (gallons > 1000){
      setGallonsFactor(0.2)
    }
    else(
      setGallonsFactor(0.3)
    )

    let margin = base_price * (
      loc_factor
      - rate_history
      + gallons_factor
      + company_profit_factor
    )

    setSuggestedPrice(margin + base_price)

  }, [user.state, user._id, gallons, base_price, loc_factor, rate_history, gallons_factor, company_profit_factor])

  const calculateSuggestedTotal = () => {
    // do some calculations on current price to get suggested price
    let value = suggestedPrice * gallons
    setTotal(value.toFixed(2))
  }

  // console.log(useLocation())

  const handleSubmit = (e) => {
    e.preventDefault(); // this is to prevent auto reload page
    setTotal(suggestedPrice * gallons)


    const quote = {
      id: user._id,
      date: String(deliveryDate),
      price: Number(suggestedPrice),
      gallons: gallons,
      total: String(total),
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
        price: Number(suggestedPrice),
        gallons: gallons,
        total: String(total),
        address: user.address1 + ' ' + user.address2,
        city: user.city,
        state: user.state,
        zip: user.zip
      }
    }).then((res) => console.log(res.data))

    history.push('/quotes')

  }


  return (
    <div>
      <h3 style={{ color: 'white' }}>Fuel Quote Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label style={{ color: 'white' }}>Gallons Requested: </label>
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
          <label style={{ color: 'white' }}>Delivery Address: </label>
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
          <label style={{ color: 'white' }}>Delivery Date: </label>
          <DatePicker
            selected = {deliveryDate}
            onChange={date => setDeliveryDate(date)}/>
        </div>
        <div className="form-group">
          <label style={{ color: 'white' }}>Suggested Price: </label>
          <input
            type="text"
            className="form-control"
            value={suggestedPrice}
            readOnly
          ></input>
        </div>
        <div className="form-group">
          <label style={{ color: 'white' }}>Total amount due: </label>
          <input
            maxLength="50"
            type="text"
            pattern="[0-9]*"
            required
            className="form-control"
            value={total}
            readOnly
          ></input>
        </div>

        <div className="form-group">
          <input
            type="button"
            value="Get Quote"
            className="btn btn-primary"
            onClick={(calculateSuggestedTotal)}
          />
          <nbsp> </nbsp>
          
          <input
            type="submit"
            value="Submit Quote"
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
