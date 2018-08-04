import React, { Component } from 'react';
import Icon from './Icon';
import PropTypes from 'prop-types';

class Preview extends Component {
  constructor(props){
    super(props);
  }
  resetButtom(){
  console.log("me han pulsado");
  }
  render(){
    const {
      colorPalette, 
      firstName, 
      job, 
      telf, 
      mail, 
      linkedin, 
      github, 
      skills} = this.props;
    return (
      <section className="section-card">
        <button 
          onClick={this.resetButtom}
          type="button" 
          name="Reset" 
          alt="reset button" 
          className="resetbutton"
        >
          <i className="far fa-trash-alt">
          </i>
          <div className="resetbutton--text">
            {this.props.reset}
          </div>
        </button>
        <div className={`card jsCard ${colorPalette}`} >
          <div className="card__top">
            <div className="card-info js-card-info">
              <p 
                className="card__top--name js-card__top--name" 
                id="fullname"
              >
                {firstName || 'Nombre Completo'}
              </p>
              <p 
                className="card__top--career js-card__top--career" 
                id="profesion"
              >
                {job || 'Profesión'}
              </p>
            </div>
          </div>
        <div className="card__image"></div>
          <ul className="card__social">
            <Icon 
              classA="button--mobile" 
              id="mobile-link"    
              classI= "fas fa-mobile-alt"  
              title="número de teléfono"  
              link={`tlf: ${telf}`} 
            />
            <Icon 
              classA="button--mail"  
              id="mail-link"      
              classI= "far fa-envelope"     
              title="correo electrónico"  
              link={`mailto: ${mail}`} 
            />
            <Icon 
              classA="button--linkedin"  
              id="linkedin-link"  
              classI= "fab fa-linkedin-in"  
              title="Linkedin"        
              link={`https://www.linkedin.com/in/ ${linkedin}`} 
            />
            <Icon 
              classA="button--github" 
              id="github-link"    
              classI= "fab fa-github-alt"   
              title="Github"            
              link={`https://github.com/ ${github}`} 
            />
          </ul> 
          <div className="card__skills">
            <ul className="card_skills--list js-card_skills--list">
              { skills.map((skill, index) => {
                return(
                  <li 
                    className="js-skill skill"
                    key={index}
                  >
                    {skill}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

Preview.propTypes = {
  job: PropTypes.string,
}

export default Preview;