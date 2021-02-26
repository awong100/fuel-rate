import React, { Component } from 'react';


class fuelhistory extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            purchase: [
                {id: 1,  date: '11/21', amount: '$97'},
                {id: 2,  date: '03/19', amount: '$56'},
                {id: 3,  date: '07/16', amount: '$81'},
                {id: 4,  date: '4/25', amount: '$34'}
            ]
        }
    }

    renderfuelhistoryData() {
        return this.state.purchase.map((purchase, index) => {
            const {id, date, amount} = purchase //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{date}</td>
                    <td>{amount}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h3>History</h3>
                <h1 id='title'>History</h1>
                <table id='User History'>
                    <tbody>
                    {this.renderfuelhistoryData()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default fuelhistory;