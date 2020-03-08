import React, { Component } from 'react';
import Betslip from './components/Betslip'
import Receipt from './components/Receipt'

import './App.css';

import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Betslip} />
          <Route path="/receipt" exact component={Receipt} />
        </Switch>
      </div>
    );
  }
}

export default App;
