import React, { Component } from 'react';
import Preview from './Component/preview';
import Form from './Component/Form';
let objetoTarjeta = {
  email:"",
  github:"",
  job:"Puesto de Trabajo",
  linkedin:"",
  name:"Nombre Completo",
  palette:"1",
  phone:"",
  photo:"images/image-card.png",
  typography:2,
  skills:[] 
}

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {objetoTarjeta}
    
  }
  render() {
    return (
      <div>
     {  <Preview
        skills={objetoTarjeta.skills}
        job={objetoTarjeta.job}
        firstName={objetoTarjeta.name}
        mail={objetoTarjeta.email}
        linkedin={objetoTarjeta.linkedin}
        github={objetoTarjeta.github}
        telf={objetoTarjeta.phone}
      /> }
      <Form />
      </div>
    );
  }
}

export default Main;
