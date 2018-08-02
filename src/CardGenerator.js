import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const colors = {
    '1': 'green-card',
    '2': 'red-card',
    '3': 'blue-card'
}

colors['1']


class CardGenerator extends Component {

    constructor(props){
        super(props);
        this.state = {
            skillsList: [],
            data: {
                email:"",
                github:"",
                job:"unicornio",
                linkedin:"",
                name:"Nombre Completo",
                palette:"1",
                phone:"",
                photo:"images/image-card.png",
                typography:2,
                skills:[] }

        }
        this.jsonResponse = this.jsonResponse.bind(this)
        this.callingAbilities= this.callingAbilities.bind(this)
        this.jsonResponse= this.jsonResponse.bind(this)
        this.callingAbilities()
    }

    callingAbilities() {
        fetch ('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
        .then(function(response){
          return response.json();
        })
        .then(this.jsonResponse)
      }
      
    //Coge las skills de la API y las mete (en forma de objeto) en el estado de este componente 
    jsonResponse(json){ 
        this.setState(
            {skillsList: json.skills}
        )
        console.log(json)
    }

    render() {
        console.log(this.props);
        
        return(
            <div>
            <Header/>
            {/* Mete main en el html y le pasa las skills como prop */}
            <Main color={colors[this.state.palette]} data={this.state.data} skillsList={this.state.skillsList}/>
            <Footer/>
            </div>
           
        );
    }
}



export default CardGenerator;