import React, { Component, Fragment } from 'react';
import Collapsable from './Collapsable'
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    return (
      <Fragment>
        <section className="section-collapsible">
          <form className="form formjs" action="cardGenerator.html" method="post">

            <Collapsable
              title="diseña"
              iconTitleClass="far fa-object-ungroup"
              iconArrowClass="fas fa-chevron-down"
            >
              <div className="design__form hidden js-collapsible-form">
                <div className="design__form-colors">
                  <p className="design__text">colores</p>
                  <div className="design__palettes">

                    <div className="design__palette design__palette1">
                      <input className="design__check-radio color-check" id="palette1" type="radio" name="palette" value="1" checked data-dest="green-card"/>
                      <label className="palette1__greens" for="palette1">
                      </label>
                    </div>

                    <div className="design__palette design__palette2">
                      <input className="design__check-radio color-check" id="palette2" type="radio" name="palette" value="2" data-dest="red-card"/>
                      <label className="palette2__reds" for="palette2">
                      </label>
                    </div>

                    <div className="design__palette design__palette3">
                      <input className="design__check-radio color-check" id="palette3" type="radio" name="palette" value="3" data-dest="blue-card"/>
                      <label className="palette3__blues" for="palette3">
                      </label>
                    </div>

                  </div>
                </div>
                <div className="design__form-fonts">
                  <p className="design__text">fuentes</p>
                  <div className="design__letter-type">

                    <div className="design__type--common design__type--font1">
                      <input className="design__check-radio font-check" id="font1" type="radio" name="typography" value="1" data-font="ubuntu-card"/>
                      <label className="font1" for="font1">
                        ubuntu
                      </label>
                    </div>

                    <div className="design__type--common design__type--font2">
                      <input className="design__check-radio font-check" id="font2" type="radio" name="typography" value="2" data-font="comic-card" checked/>
                      <label className="font2" for="font2">
                        comic sans
                      </label>
                    </div>

                    <div className="design__type--common design__type--font3">
                      <input className="design__check-radio font-check" id="font3" type="radio" name="typography" value="3" data-font="montse-card"/>
                      <label className="font3" for="font3">
                        monserrat
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </Collapsable>

            <Collapsable
              title="rellena"
              iconTitleClass="far fa-keyboard"
              iconArrowClass="fas fa-chevron-down"
            >
              <div className="hidden js-collapsible-form">
                <div className="section-collapsible__fill--form">
                  <label className="fill-input" for="nmb ">Nombre completo</label>
                  <input className="fill-input__placeholder js-personal-name input-style" placeholder="Ej: Sally Jill" id="nmb" type="text" name="name" value="" data-stringer="fullname"/>

                  <label className="fill-input" for="job ">Puesto</label>
                  <input className="fill-input__placeholder input-style" placeholder="Ej: Front-end unicorn" id="job" type="text" name="job" value="" data-stringer="profesion"/>

                  <label type="file" className="fill-input" for="add-image">Imagen de perfil</label>
                  <div className="fill-input__image__square">

                    <button type="button" className="fill-input__image" name="button">Añadir imagen</button>
                    {/*<input className="fill-input__input" id="add-image" name="photo" type="file" value="Añadir imagen"/>*/}

                    <div className="square__white"></div>
                  </div>

                  <label className="fill-input" for="emailaddress">Email</label>
                  <input className="fill-input__placeholder input-style" placeholder="Ej: sally-hill@gmail.com" id="emailaddress" type="email" name="email" value="" data-stringer="mail-link"/>
                  <label className="fill-input" for="phone">Teléfono</label>
                  <input className="fill-input__placeholder input-style" placeholder="Ej: 555-55-55-55" id="phone" type="number" name="phone" value="" data-stringer="mobile-link"/>
                  <label className="fill-input" for="lkdn">Linkedin</label>
                  <input className="fill-input__placeholder input-style" placeholder="Ej:sally-hill" id="lkdn" type="url" name="linkedin" value="" data-stringer="linkedin-link"/>
                  <label className="fill-input" for="GH">Github</label>
                  <input className="fill-input__placeholder input-style" placeholder="Ej: sally-hill" id="GH" type="url" name="github" value="" data-stringer="github-link"/>

                  <div className="abilities-fill">
                    <label className="fill-input__abilities" for="">Habilidades (máximo 3)</label>
                    <div className="ability-box js-ability-box">
                      <select className="select-abilities js-select-abilities" name="skills">
                      </select>
                      <button className="button-abilities js-button-abilitiesPlus" type="button" name="button">
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <div className="ability-box js-ability-box skills-hidden">
                      <select className="select-abilities js-select-abilities" name="skills">
                      </select>
                      <button className="button-abilities js-button-abilitiesMinus" type="button" name="button">
                        <i className="fas fa-minus"></i>
                      </button>
                    </div>
                    <div className="ability-box js-ability-box skills-hidden">
                      <select className="select-abilities js-select-abilities" name="skills">
                      </select>
                      <button className="button-abilities js-button-abilitiesMinus" type="button" name="button">
                        <i className="fas fa-minus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Collapsable>

            <Collapsable
              title="comparte"
              iconTitleClass="fas fa-share-alt"
              iconArrowClass="fas fa-chevron-down"
            >
              <div className="js-collapsible-form hidden">
                <div className="section-collapsible__share--button">

                  <button className="btn-create-card js-btn-create-card" type="button" name="button">
                    <span>
                      <i className="far fa-address-card"></i>
                    </span>CREAR TARJETA</button>

                </div>

                <div className="section-collapsible__share--end js-hidden-twitter">
                  <p className="phrase">La tarjeta ha sido creada:</p>
                  {/* <!-- <a class="link-awesome" href="http://awesome-profile-card.com?id=S456DF0001"> http://awesome-profile-card.com?id=S456DF0001 </a> --> */}
                  <a href="#" className="link-awesome linkTwitter"></a>
                  <button className="btn-share btn-sharejs" type="button" name="button">
                    <span>
                      <i className="fab fa-twitter"></i>
                    </span>Compartir en twitter
                  </button>
                </div>
              </div>

            </Collapsable>

          </form>
        </section>

      </Fragment>
            );
          }
        }

export default Form;
