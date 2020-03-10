import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/Bet.css';

class Bet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //create new array depending on size of bets
            stakes: new Array(this.props.bets.length)
        }

        // this.handleStakes = this.handleStakes.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleStakes(e, i) {
        //copy state array.
        const copy = [...this.state.stakes];
        //calculate total of stake
        const total = (this.props.bets[i].bestOdd * e.target.value) - e.target.value;
        //assign total to index of bet in array
        copy[i] = total;

        this.setState({stakes: copy});        
    }

    handleClick(e) {
        //push to new route if stake has been entered passing stakes as props to route
        if (this.state.stakes.length > 0) this.props.history.push('/receipt', {stakes: this.state.stakes});
    }
    
	render() {
        //create list of bets 
        const printBets = this.props.bets.map((elem, i) =>            
            <li key={i} className="Bet__item">
                <div className="Bet__info">
                    <p className="Bet__name">Name: <span>{elem.name}</span></p>
                    <p className="Bet__odds">Best Odds: <span>{elem.bestOdd}</span></p>
                </div>
                
                {/* create input for stake passing in index to inline handle function */}
                <div className="Bet__stake-holder">
                    <input className="Bet__stake" min="0" type="number" placeholder="enter stake" onChange={(e) => this.handleStakes(e, i)}/>
                </div>
            </li>
        );

		return ( 
			<div className="Bet">
                <ul className="Bets__list">
                    {printBets}
                </ul>

                <div className="Bet__btn-holder">
                    <button className="Bet__btn" onClick={this.handleClick}>Bet now</button>
                </div>
			</div>
		);
	}
}

export default withRouter(Bet);