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
            {this.props.reset}
          </div>
        </button>
        <div className={`card jsCard ${this.props.colorPalette}`} >
          <div className="card__top">
            <div className="card-info js-card-info">
              <p
                className="card__top--name js-card__top--name"
                id="fullname">{this.props.firstName || 'Nombre Completo'}
              </p>
              <p
                className="card__top--career js-card__top--career"
                id="profesion">
                {this.props.job}
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
        </div>
      </section>
    );
  }
}

Preview.propTypes = {
  job: PropTypes.string,
  github: PropTypes.string,
  linkedin: PropTypes.string,
  mail: PropTypes.string,
  telf: PropTypes.string,
  firstName: PropTypes.string,
  /* resetButtom: PropTypes.string,
  reset: PropTypes.string, */
}

export default Preview;