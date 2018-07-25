
import React, { Component } from 'react';
import Icon from './Icon';


class Preview extends Component {
render(){
    return (
        <section className="section-card">
        <button type="button" name="Reset" alt="reset button" className="resetbutton">
          <i className="far fa-trash-alt"></i>
          <div className="resetbutton--text">{this.props.reset}</div>
        </button>
        
          <div className="card__top">
            <div className="card-info js-card-info">
              <p className="card__top--name js-card__top--name" id="fullname">{this.props.firstName}</p>
              <p className="card__top--career js-card__top--career" id="profesion">{this.props.job}</p>
            </div>
          </div>
          <div className="card__image">
          </div>
          <Icon
           
            title="phone"
            link= "tel:" 
          />
          <Icon
            classA= "button--mobile"
            classID="mobile-link"
            classI= "fas fa-mobile-alt js-icon"
            title="número de teléfono"
            link="mailto:" 
            
          />
        </section>

    );
}

}

export default Preview;