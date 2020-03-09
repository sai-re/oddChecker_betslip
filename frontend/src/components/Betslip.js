import React, {Component} from 'react';
import Bet from './Bet';
import '../styles/Betslip.css';

class Betslip extends Component {
	//check to see if component is mounted, stop data being fetched outside of component
	_isMounted = false;

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

			const betsShort = [];
			
			//push best odd and bet name to temp array
			data.forEach(elem => {
				//gets odds decimal from object and into array and use spread to get max value.
				let bestOdd = Math.max(...elem.odds.map(item => item.oddsDecimal), 0);
				betsShort.push({name: elem.name, bestOdd: bestOdd});
			})

			//Check if to see if component has mounted
			if (this._isMounted) this.setState({disable: true, bets: betsShort});

		} catch(err) {
			console.log(err)
		}
	}

	handleOption(e) {
		//get endpoint depending on which option was selected from drop down.
		const endpoint = (e.target.value === "more-than-two") ? "decimalOddsMoreThanTwo" : "decimalOddsLessThanTwo";
		this.getData(endpoint);
	}

	//set is mounted to true.
	componentDidMount = () => this._isMounted = true;

	componentDidUpdate = () => console.log(this.state);

	//reset mounted so fetch doesn't run on another page.
	componentWillUnmount = () => this._isMounted = false;

	render() {
		return ( 
			<div className="Betslip">
				<div className="Betslip__holder">
					<div className="Betlsip__title-holder">
						<h1 className="Betslip__title">Betslip</h1>
					</div>

					<div className="Betslip__filter-holder">
						<label className="Betslip__label">Filter by decimal</label>
						<select className="Betslip__select" onChange={this.handleOption}>
							{/* Disable default option once an option is chosen */}
							<option disabled={this.state.disable}>choose an option</option>
							<option value="more-than-two">More than 2</option>
							<option value="less-than-two">Less than 2</option>
						</select>
					</div>
				</div>
                
                <Bet bets={this.state.bets} />
			</div>
		);
	}
}

export default Betslip;