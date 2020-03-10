import React, { Component } from 'react';
import FetchData from './components/FetchData';
import Receipt from './components/Receipt';

import './App.css';

import {Switch, Route} from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route path="/" exact component={FetchData} />
					<Route path="/receipt" exact component={Receipt} />
				</Switch>
			</div>
		);
	}
}

export default App;
