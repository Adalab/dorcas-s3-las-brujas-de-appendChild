import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';


class CardGenerator extends Component {
    constructor(props){
        super(props); 
        this.state = {
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
      }
    render() {
        console.log(this.props);
        
        return(
            <div>
            <Header/>
            <Main data={this.state.data}/>
            <Footer/>
            </div>
           
        );
    }
}



export default CardGenerator;