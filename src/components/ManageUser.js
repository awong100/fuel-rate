import React, {useContext, useState} from 'react';
import { useHistory } from "react-router-dom";
import { UserContext} from '../UserContext';
import axios from "axios"

// TODO: save input into user model

function ManageUser() {

  // the way this is currently structured, users are required to modify
  // all fields even if they desire to modify just 1 field. this is BAD!
  const { user, setUser } = useContext(UserContext)
  const [name, setName] = useState("")
  const [add1, setAdd1] = useState("")
  const [add2, setAdd2] = useState("")
  const [city, setCity] = useState("")
  const [stateAdd, setStateAdd] = useState("")
  const [zip, setZip] = useState("")

  let history = useHistory()


  
  console.log(user)


  const handleSubmit = (e) => {
    e.preventDefault(); // this is to prevent auto reload page
    console.log(name, add1, add2, city, stateAdd, zip)
    //setUser(user)
    if(name != ""){
      user.name = name
    }
    if(add1 != ""){
    user.address1 = add1
    }
    if(add2 != ""){
    user.address2 = add2
    }
    if(city != ""){
    user.city = city
    } 
    if(stateAdd != ""){
    user.state = stateAdd
    }
    if(zip != ""){
    user.zip = zip
    }

    axios({
      method: "post",
      url: "http://localhost:5500/users/update/" + user._id,
      data: {
        name: name,
        address1: add1,
        address2: add2,
        city: city,
        state: stateAdd,
        zip: zip
      },
    }).then((res) => console.log(res.data));
    history.push("/quote")
  };

  return (
    <div>
      <h3 style={{ color: 'white' }}>Manage User '{ user.username }'</h3>
      {/* <h4 style={{ color: 'red' }} >
        Note: User must modify all fields if they wish to edit their profile information
      </h4> */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label style={{ color: 'white' }}>Full Name: </label>
          <input
            maxLength="50"
            type="text"
            required
            className="form-control"
            defaultValue={user.name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label style={{ color: 'white' }}>Address 1: </label>
          <input
            maxLength="100"
            type="text"
            required
            className="form-control"
            defaultValue={user.address1}
            onChange={(e) => setAdd1(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label style={{ color: 'white' }}>Address 2: </label>
          <input maxLength="100" 
          type="text" 
          className="form-control"
          defaultValue={user.address2}
          onChange={(e) => setAdd2(e.target.value)}>
          </input>
        </div>
        <div className="form-group">
          <label style={{ color: 'white' }}>City: </label>
          <input type="text" 
          required 
          className="form-control"
          defaultValue={user.city}
          onChange={(e) => setCity(e.target.value)}>
          </input>
        </div>
        <div className="form-group">
          <label style={{ color: 'white' }}>State: </label>
          <select type="text" required className="form-control"
            defaultValue={user.state}
            onChange={(e) =>  setStateAdd(e.target.value)}>
            <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="AZ">AZ</option>
            <option value="AR">AR</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DE">DE</option>
            <option value="DC">DC</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="IA">IA</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="ME">ME</option>
            <option value="MD">MD</option>
            <option value="MA">MA</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MS">MS</option>
            <option value="MO">MO</option>
            <option value="MT">MT</option>
            <option value="NE">NE</option>
            <option value="NV">NV</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NY">NY</option>
            <option value="NC">NC</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WV">WV</option>
            <option value="WI">WI</option>
            <option value="WY">WY</option>
            
          </select>
        </div>
        <div className="form-group">
          <label style={{ color: 'white' }}>Zipcode: </label>
          <input
            minLength="5"
            maxLength="9"
            type="text"
            required
            className="form-control"
            defaultValue={user.zip}
            onChange={(e) => setZip(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <input type="submit" value="Edit User" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default ManageUser;

// Full Name (50 characters, required)
// 	- Address 1 (100 characters, required)
// 	- Address 2 (100 characters, optional)
// 	- City (100 characters, required)
// 	- State (Drop Down, selection required) DB will store 2 character state code
// 	- Zipcode (9 characters, at least 5 character code required)
