import React from "react";
import { render, fireEvent } from '@testing-library/react'

function Betslip(props) {
	return ( 
		<div className="Betslip">
			<div className="Betslip__holder">
				<div className="Betlsip__title-holder">
					<h1 className="Betslip__title">Betslip</h1>
				</div>

				<div className="Betslip__filter-holder">
					<label className="Betslip__label">Filter by decimal</label>
					<select name="options" className="Betslip__select" onChange={props.handler} data-testid="select-input">
						{/* Disable default option once an option is chosen */}
						<option disabled={props.data.disabled}>choose an option</option>
						<option value="more-than-two">More than 2</option>
						<option value="less-than-two">Less than 2</option>
					</select>
				</div>
			</div>
			
			{/* <Bet bets={props.data.bets} /> */}
		</div>
	);
}

const state = {
	disabled: true,
	bets: [{name: "Sara Errani", bestOdd: 2.54}, {name: "Svetlana Kuznetsova", bestOdd: 2.2}]
}

describe("Betslip tests", () => {
	it("renders without crashing", () => {
		const {getByText} = render(<Betslip data={state} />);
		expect(getByText("Betslip")).toBeInTheDocument();
	});

	it("change is fired", () => {
		const {getByTestId} = render(<Betslip data={state} />);
		fireEvent.change(getByTestId("select-input"), {target: {value: "more-than-two"}});
		expect(getByTestId("select-input").value).toBe("more-than-two");
	});

	it("Is disabled true", () => {
		const {getByTestId} = render(<Betslip data={state} />);
		expect(getByTestId("select-input").childNodes[0].disabled).toBe(true);
	});
});