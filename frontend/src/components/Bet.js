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

    componentDidUpdate = () => console.log(this.state)
    
	render() {
        //create list of bets 
        const printBets = this.props.bets.map((elem, i) =>            
            <li key={i}>
                <p className="Bet__name">Name: {elem.name}</p>
                <p className="Bet__odds">Decimal: {elem.bestOdd}</p>
                
                {/* create input for stake passing in index to handle function */}
                <div className="Bet__stake-holder">
                    <input type="number" placeholder="enter stake" onChange={(e) => this.handleStakes(e, i)}/>
                </div>
            </li>
        );

		return ( 
			<div className="Bet">
                <ul className="Bets__list">
                    {printBets}
                </ul>

                <button onClick={this.handleClick}>Bet now</button>
			</div>
		);
	}
}

export default withRouter(Bet);