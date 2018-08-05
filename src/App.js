import React, { Component } from 'react';
import CardGenerator from './Component/CardGenerator';
import LandingPage from './Component/LandingPage';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Switch>
            <Route exact path='/' component= { LandingPage } />
            <Route path='/card-generator' component= { CardGenerator } />
        </Switch>
    )
  }
}
export default App;