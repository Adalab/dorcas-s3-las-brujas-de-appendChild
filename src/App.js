import React, { Component } from 'react';
import Preview from './preview';

class App extends Component {
  render() {
    return (
      <div>
      <Preview
        reset="RESET"
        firstName="Nombre Apellido"
        job="Profesión"
      />
      </div>
    );
  }
}

export default App;
