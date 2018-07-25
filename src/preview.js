
import React, { Component } from 'react';



class Preview extends Component {
render(){
    return (
        <section className="section-card">
        <button type="button" name="Reset" alt="reset button" className="resetbutton">
          <i className="far fa-trash-alt"></i>
          <div className="resetbutton--text">RESET</div>
        </button>
        
          <div className="card__top">
            <div className="card-info js-card-info">
              <p className="card__top--name js-card__top--name" id="fullname">Nombre apellido</p>
              <p className="card__top--career js-card__top--career" id="profesion">Profesión</p>
            </div>
          </div>
          <div className="card__image">
          </div>
          <div>
            <ul className="card__social">
              <li className="card__social--li">
                <a className="button-card button--mobile js-social" id="mobile-link" href="tel:" title="número de teléfono" target="_blank">
                  <i className="fas fa-mobile-alt js-icon"></i>
                </a>
              </li>
              <li className="card__social--li">
                <a className="button-card button--mail js-social" id="mail-link" href="mailto:" title="correo electrónico">
                  <i className="far fa-envelope js-icon"></i>
                </a>
              </li>
              <li className="card__social--li">
                <a className="button-card button--linkedin js-social" id="linkedin-link" href="https://www.linkedin.com/in/" title="Linkedin" target="_blank">
                  <i className="fab fa-linkedin-in js-icon"></i>
                </a>
              </li>
              <li className="card__social--li">
                <a className="button-card button--github js-social" id="github-link" href="https://github.com/" title="Github" target="_blank">
                  <i className="fab fa-github-alt js-icon"></i>
                </a>
              </li>
            </ul>
            <div className="card__skills">
              <ul className="card_skills--list js-card_skills--list">
                  <li className="js-skill skill"></li>
              </ul>
            </div>
          </div>
      </section>

    );
}

}

export default Preview;