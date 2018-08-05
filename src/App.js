import React, { Component } from 'react';
import CardGenerator from './Component/CardGenerator';
import LandingPage from './Component/LandingPage';

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage/>
        <CardGenerator/>
      </div>
    )
  }
}
export default App;