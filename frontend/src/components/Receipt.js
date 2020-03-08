import React, {Component} from 'react';
import '../styles/Receipt.css';

class Receipt extends Component {
    constructor(props) {
        super(props);
    }

	render() {
        const total = this.props.location.state.stakes.reduce((accum, next) => accum + next);

		return ( 
			<div className="Receipt">
                <h1>Receipt</h1>
                <h2>Your bet has been placed</h2>
                <p>Your total is £{total}</p>
			</div>
		);
	}
}

export default Receipt;