import React, { Component } from 'react';
import Icon from './Icon';
import PropTypes from 'prop-types';

class Preview extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);
  }
  resetButtom() {
    console.log("me han pulsado");
  }
  render() {
    return (
      <section className="section-card">
        <button onClick={this.resetButtom}
          type="button"
          name="Reset"
          alt="reset button"
          className="resetbutton"
        >
          <i className="far fa-trash-alt">
          </i>
          <div className="resetbutton--text">
            RESET
          </div>
        </button>
        <div className={`card jsCard ${this.props.colorPalette} ${this.props.colortypo}`} >
          <div className="card__top">
            <div className="card-info js-card-info">
              <p
                className="card__top--name js-card__top--name"
                id="fullname">{this.props.firstName || 'Joan Wytte'}
              </p>
              <p
                className="card__top--career js-card__top--career"
                id="profesion">
                {this.props.job || "Hierbas y Remedios"}
              </p>
            </div>
          </div>
          <div className="card__image"></div>
          <ul className="card__social">
            <Icon
              classA="button--mobile"
              id="mobile-link"
              classI="fas fa-mobile-alt"
              title="número de teléfono"
              link={`tlf: ${this.props.telf}`}
            />
            <Icon
              classA="button--mail"
              id="mail-link"
              classI="far fa-envelope"
              title="correo electrónico"
              link={`mailto: ${this.props.mail}`}
            />
            <Icon
              classA="button--linkedin"
              id="linkedin-link"
              classI="fab fa-linkedin-in"
              title="Linkedin"
              link={`https://www.linkedin.com/in/ ${this.props.linkedin}`}
            />
            <Icon
              classA="button--github"
              id="github-link"
              classI="fab fa-github-alt"
              title="Github"
              link={`https://github.com/ ${this.props.github}`} />
          </ul>
          <div className="card__skills">
            <ul className="card_skills--list js-card_skills--list">
              {this.props.skills.map((skill, index) => {
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
  job: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  telf: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
}

export default Preview;