import React from 'react';
import Bet from './Bet';
import '../styles/Betslip.css';

function Betslip(props) {
	return ( 
		<div className="Betslip">
			<div className="Betslip__holder">
				<div className="Betlsip__title-holder">
					<h1 className="Betslip__title">Betslip</h1>
				</div>

				<div className="Betslip__filter-holder">
					<label className="Betslip__label">Filter by decimal</label>
					<select className="Betslip__select" onChange={props.handler}>
						{/* Disable default option once an option is chosen */}
						<option disabled={props.data.disable}>choose an option</option>
						<option value="more-than-two">More than 2</option>
						<option value="less-than-two">Less than 2</option>
					</select>
				</div>
			</div>
			
			<Bet bets={props.data.bets} />
		</div>
	);
}

export default Betslip;