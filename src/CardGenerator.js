import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';


class CardGenerator extends Component {

    constructor(){
        super()
        this.state = {
            skillsList: []
        }
        this.jsonResponse = this.jsonResponse.bind(this)
        this.callingAbilities= this.callingAbilities.bind(this)
        this.jsonResponse= this.jsonResponse.bind(this)
        this.callingAbilities()
    }

    //hacer método y bind de funcion json dentro de constructor
    callingAbilities() {
    
        fetch ('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
        .then(function(response){
          return response.json();
        })
        .then(this.jsonResponse)

      }
    
    jsonResponse(json){ 
        this.setState(
            {skillsList: json.skills}
        )
        console.log(json)
    }

    render() {
        return(
            <div>
            <Header/>
            <Main skillsList={this.state.skillsList}/>
            <Footer/>
            </div>
           
        );
    }
}



export default CardGenerator;