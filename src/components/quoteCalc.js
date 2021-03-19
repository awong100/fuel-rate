import React, {useContext, useState} from 'react';
import { useHistory } from "react-router-dom";
import { UserContext} from '../UserContext';
import axios from "axios"

function QuoteCalc(){


    const [RateHistory, setRateHistory] = useState("")
    const [Gallons, setGallons] = useState("")
    const [stateRate, setStateRate] = useState("")
    const [Margin, setMargin] = useState("")

    let history = useHistory()
    const { user, setUser } = useContext(UserContext)
    console.log(user)

        return (
            <div>
                <h3>Quote for User </h3>
                <h4 style={{ color: 'blue' }} >
                    woop
                </h4>
                <div className="form-group">
                    <label>Margin: </label>
                    <input
                        maxLength="100"
                        type="numeric"
                        required
                        className="form-control"
                        placeholder={user.gallons}
                        readOnly
                    ></input>
                </div>
            </div>

        );
}


export default QuoteCalc;