import React from 'react';
import '../styles/Receipt.css';

function Receipt(props) {
    //calculate sum of stakes
    const total = props.location.state.stakes.reduce((accum, next) => {
        //in case first stake left blank
        if (accum === undefined) accum = 0;

        return accum + next
    });

    //back to home
    const handleClick = () => props.history.push('/');

    const formatNumber = number => number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return ( 
        <div className="Receipt">
            <div className="Receipt__holder">
                <h1 className="Receipt__title">Receipt</h1>
                <h2 className="Receipt__sub-title">Your bet has been placed</h2>
                <p className="Receipt__total">Your total stake is £{formatNumber(total.toFixed(2))}</p>
            </div>

            <div className="Bet__btn-holder">
                <button className="Bet__btn" onClick={handleClick}>Back</button>
            </div>
        </div>
    );	
}

export default Receipt;