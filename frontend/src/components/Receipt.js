import React from 'react';
import '../styles/Receipt.css';

function Receipt(props) {
    //calculate sum of stakes
    const total = props.location.state.stakes.reduce((accum, next) => accum + next);

    return ( 
        <div className="Receipt">
            <h1>Receipt</h1>
            <h2>Your bet has been placed</h2>
            <p>Your total stake is £{total.toFixed(2)}</p>
        </div>
    );	
}

export default Receipt;