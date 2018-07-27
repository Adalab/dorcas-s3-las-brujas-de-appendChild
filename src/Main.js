import React, { Component } from 'react';
import Preview from './Component/preview';
import Form from './Component/Form';
const objetoTarjeta = {
  email:"",
  github:"",
  job:"Puesto de hola Trabajo",
  linkedin:"",
  name:"Nombre Completo",
  palette:"1",
  phone:"",
  photo:"images/image-card.png",
  typography:2,
  skills:[] 
}

class Main extends Component {
  render() {
    return (
      <div>
      <Preview
        skills={objetoTarjeta.skills}
        job={objetoTarjeta.job}
        firstName={objetoTarjeta.name}
        mail={objetoTarjeta.email}
      />
      <Form />
      </div>
    );
  }
}

export default Main;
