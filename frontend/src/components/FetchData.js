import React, {Component} from 'react';
import Betslip from './Betslip';

class FetchData extends Component {
	constructor(props) {
		super(props);

		this.state = {
			disable: false,
			bets: []
		}

		//binds handler this to component
		this.handleOption = this.handleOption.bind(this);
	}

	getData = async (endpoint) => { 
		const url = `http://localhost:4000/${endpoint}`;

		try {
			//fetch response from api
			const response = await fetch(url);
			const data = await response.json();

			//temp array
			const betsShort = [];
			
			//push best odd and bet name to temp array
			data.forEach(elem => {
				//map through odds arrray and return as array oddsDecimal property, then spread into Max to find largest
				let bestOdd = Math.max(...elem.odds.map(item => item.oddsDecimal), 0);
				betsShort.push({name: elem.name, bestOdd: bestOdd});
			})

			//Check if to see if component has mounted
			this.setState({disable: true, bets: betsShort});

		} catch(err) {
			console.log(err)
		}
	}

	handleOption(e) {
		//get endpoint depending on which option was selected from drop down.
		const endpoint = (e.target.value === "more-than-two") ? "decimalOddsMoreThanTwo" : "decimalOddsLessThanTwo";
		this.getData(endpoint);
	}

	render() {
		console.log(this.state)
		return (
			//pass data as props to betslip
            <Betslip data={this.state} handler={this.handleOption} />
		);
	}
}

export default FetchData;