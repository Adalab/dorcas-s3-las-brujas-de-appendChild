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
        <div className="card__image"></div>
        <ul className="card__social">
          <Icon classA="button--mobile"    id="mobile-link"    classI= "fas fa-mobile-alt"   title="número de teléfono"  link="tlf:" />
          <Icon classA="button--mail"      id="mail-link"      classI= "far fa-envelope"     title="correo electrónico"  link="mailto:" />
          <Icon classA="button--linkedin"  id="linkedin-link"  classI= "fab fa-linkedin-in"  title="Linkedin"            link="https://www.linkedin.com/in/" />
          <Icon classA="button--github"    id="github-link"    classI= "fab fa-github-alt"   title="Github"              link="https://github.com/" />
        </ul> 
      </section>
    );
  }
}

export default Preview;