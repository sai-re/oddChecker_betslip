import React, {Component} from "react";
import { render, fireEvent } from '@testing-library/react'

class Bet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //create new array
            stakes: []
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
                    <input aria-label="stake-input" className="Bet__stake" min="0" type="number" placeholder="enter stake" onChange={(e) => this.handleStakes(e, i)}/>
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

const state = {
	bets: [{name: "Sara Errani", bestOdd: 2.54}, {name: "Svetlana Kuznetsova", bestOdd: 2.2}]
}

const calculate = (val, odds) => (odds * val) - val;

describe("Bet list tests", () => {
	it("renders without crashing", () => {
		const {getByText} = render(<Bet bets={state.bets} />);
		expect(getByText("Sara Errani")).toBeInTheDocument();
    });
    
	it("change is fired", () => {
		const {getAllByLabelText} = render(<Bet bets={state.bets} />);
		fireEvent.change(getAllByLabelText("stake-input")[0], {target: {value: 18}});
		expect(getAllByLabelText("stake-input")[0].value).toBe("18");
	});

    it('calculate stake is correct', () => {
        expect(calculate(8, 2.54)).toBe(12.32);
    })
});