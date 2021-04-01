import React, { useContext, useEffect } from "react";
import { UserContext} from '../UserContext';
import axios from 'axios'




function FuelHistory() {
 //since we are extending class Table so we have to use super in order to override Component class constructor
  this.setState = {
    //state is by default an object
    quotes: []
  };

  const Quote = props => (         //  functional component to store a user row // need to turn the delete into a button
    <tr>
        <td>{props.quote.id}</td>
        <td>{props.quote.date}</td>
        <td>{props.quote.price}</td>
        <td>{props.quote.gallons}</td>
        <td>{props.quote.total}</td>
        <td>{props.quote.address}</td>
        <td>{props.quote.city}</td>
        <td>{props.quote.state}</td>
        <td>{props.quote.zip}</td>
    </tr>
  )

  const { user, setUser } = useContext(UserContext);
 

  useEffect(() => {
    axios.get('http://localhost:5500/quotes/' + user._id)
        .then(response => {
            this.setState({
                quotes: response.data
            })
        })
        .catch((err) => {
            console.log(`Error: ` + err)
        })
  })

  const QuoteList = () => {
    return this.state.quotes.map(currentQuote => {
      return <Quote quote = {currentQuote} key={currentQuote.id} />
    })
  }



  // renderfuelhistoryData() {
  //   return this.state.purchase.map((purchase, index) => {
  //     const { id, Date,Price, Gallons, Total, Address } = purchase; //destructuring
  //     return (
  //       <tr key={id}>
  //         <td>{id}</td>
  //         <td>{Date}</td>
  //         <td>{Price}</td>
  //         <td>{Gallons}</td>
  //         <td>{Total}</td>
  //         <td>{Address}</td>
  //       </tr>
  //     );
  //   });
  // }
  // renderfuelhistoryHeader() {
  //   let header = Object.keys(this.state.purchase[0]);
  //   return header.map((key, index) => {
  //     return <th key={index}>{key.toUpperCase()}</th>;
  //   });
  // }
  
  return (
    <div>
      <h3>User Quote History</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>User ID</th>
            <th>Delivery Date</th>
            <th>price per gallon</th>
            <th>gallons</th>
            <th>total</th>
            <th>address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
          </tr>
        </thead>
        <tbody>
          { QuoteList() }
        </tbody>
      </table>
    </div>
  )
}
export default FuelHistory;
