import React, {Component} from 'react';
import Filter from './Filter';
import '../styles/Betslip.css';

function Betslip() {
	return ( 
		<div className="Betslip">
			<h1 className="Betslip__title">Betslip</h1>

			<Filter />
		</div>
	);
}

export default Betslip;