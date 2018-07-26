import React, { Component } from 'react';
import Preview from './Component/preview';
import Form from './Component/Form';

class Main extends Component {
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

export default Main;
