import React, { Component } from "react";

class fuelhistory extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      purchase: [
        { id: 1, Date: "11/21",Price:"$10.78", Gallons: 9,Total: "$97", Address:"Address" },
        { id: 2, Date: "03/19",Price:"$9.34" ,  Gallons: 6,Total: "$56", Address:"Address" },
        { id: 3, Date: "07/16",Price:"$16.20" ,  Gallons: 5,Total: "$81", Address:"Address" },
        { id: 4, Date: "4/25",Price:"$11.33" ,   Gallons: 3,Total: "$34", Address:"Address" },
      ],
    };
  }

  renderfuelhistoryData() {
    return this.state.purchase.map((purchase, index) => {
      const { id, Date,Price, Gallons, Total, Address } = purchase; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{Date}</td>
          <td>{Price}</td>
          <td>{Gallons}</td>
          <td>{Total}</td>
          <td>{Address}</td>
        </tr>
      );
    });
  }
  renderfuelhistoryHeader() {
    let header = Object.keys(this.state.purchase[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">History table</h1>
        <table class="table" id="History">
          <tbody>
            <tr>{this.renderfuelhistoryHeader()}</tr>
            {this.renderfuelhistoryData()}
          </tbody>
        </table>
      </div>
    );
  }
}
export default fuelhistory;
