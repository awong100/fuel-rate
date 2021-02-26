import React, { Component } from 'react';


class fuel-history extends Component{
    constructor(props) {
        super(props)
        this.state ={
            data: [
                { typeoffuel: "Fuel from database", Amountpurchased: "Amount of fuel purchased", datepurchased: "Date of purchase"},
                {   typeoffuel: "Fuel from database", Amountpurchased: "Amount of fuel purchased", datepurchased: "Date of purchase"},
                {   typeoffuel: "Fuel from database", Amountpurchased: "Amount of fuel purchased", datepurchased: "Date of purchase"},
            ]
        }
    }
renderfuel-historyData() {
    return this.state.students.map((student, index) => {
        const { typeoffuel, amountpurchased, datepurchased} = data //destructuring
        return (
            <tr key={typeoffuel}>
                <td>{typeoffuel}</td>
                <td>{amountpurchased}</td>
                <td>{datepurchased}</td>
            </tr>
        )
    })
}
renderfuel-historyHeader() {
    let header = Object.keys(this.state.data[0])
    return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
    })
}

render() {
        return (
            <div>
                <h1 id='title'>History</h1>
                <table id='data'>
                    <tbody>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }

}
function fuel-history() {
    return(
        <div>
            <h3>Purchase History</h3>
        </div>
    );
}

export default fuel-history;