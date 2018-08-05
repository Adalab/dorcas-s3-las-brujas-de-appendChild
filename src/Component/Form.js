import React, { Component, Fragment } from 'react';
import Collapsable from './Collapsable'
import Select from './Select';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    const initialSkill = this.props.skillsList[0];
    this.state = {
      selectsArr: [initialSkill],
      openCollapsibleDesign: true,
      openCollapsibleFill: false,
      openCollapsibleShare: false,
    }

    this.handleSelect = this.handleSelect.bind(this)
    this.addSelect = this.addSelect.bind(this)
    this.removeSelect = this.removeSelect.bind(this)
    this.handleCollapsibleDesign = this.handleCollapsibleDesign.bind(this);
    this.handleCollapsibleFill = this.handleCollapsibleFill.bind(this);
    this.handleCollapsibleShare = this.handleCollapsibleShare.bind(this);
  }
  maxSelects = 3;


  handleCollapsibleDesign(event) {
    console.log('collapsable CLICK CLICK CLICK');
    const { openCollapsibleDesign } = this.state
    if (openCollapsibleDesign === true) {
      this.setState({ openCollapsibleDesign: false });
    } else {
      this.setState({ openCollapsibleDesign: true });
    }
  }

  handleCollapsibleFill(event) {
    console.log('collapsable CLICK CLICK CLICK');
    const { openCollapsibleFill } = this.state
    if (openCollapsibleFill === true) {
      this.setState({ openCollapsibleFill: false });
    } else {
      this.setState({ openCollapsibleFill: true });
    }
  }

  handleCollapsibleShare(event) {
    console.log('collapsable CLICK CLICK CLICK');
    const { openCollapsibleShare } = this.state
    if (openCollapsibleShare === true) {
      this.setState({ openCollapsibleShare: false });
    } else {
      this.setState({ openCollapsibleShare: true });
    }
  }

  addImg() {
    console.log("a mi también");
  }
  createCard() {
    console.log("y a miii");
  }
  twitterButtom() {
    console.log("soy twitter");
  }

  handleSelect(skill, i) {
    this.setState({
      selectsArr: this.state.selectsArr.slice(0, i).concat(skill, this.state.selectsArr.slice(i + 1))
    })
  }

  addSelect() {
    if (this.state.selectsArr.length < this.maxSelects) {
      this.setState({
        selectsArr: this.state.selectsArr.concat(this.props.skillsList[0])
      })
    } else {
      console.log('Máximo 3 habilidades')
    }
  }

  removeSelect(i) {
    this.setState({
      selectsArr: this.state.selectsArr.slice(0, i).concat(this.state.selectsArr.slice(i + 1))
    })

  }

  render() {
    console.log('selectsArr', this.state.selectsArr)
    const selects = this.state.selectsArr.map((skill, i) => {
      //Es length - 1 porque si el array tiene 3 elementos, se numeran como 0, 1 y 2
      const lastSelect = i === this.state.selectsArr.length - 1;
      const addSelectsOnClick =
        lastSelect && this.state.selectsArr.length < this.maxSelects;
      if (addSelectsOnClick) {
        return (
          <Select
            selectedValue={skill}
            onSelect={(e) => {
              const selectedSkill = e.target.value;
              this.handleSelect(selectedSkill, i)
            }}
            onChange={this.addSelect}
            skillsList={this.props.skillsList}
            icon="fa-plus"
          />
        )
      } else {
        return (
          <Select
            selectedValue={skill}
            onSelect={(e) => {
              const selectedSkill = e.target.value;
              this.handleSelect(selectedSkill, i)
            }}
            onChange={() => { this.removeSelect(i) }}
            skillsList={this.props.skillsList}
            icon="fa-minus"
          />
        )
      }

    }
    );

    const {
      openCollapsibleDesign,
      openCollapsibleFill,
      openCollapsibleShare
    } = this.state;
    const { valuePalette } = this.props;
    console.log('props en form', this.props);
    // console.log('props en form', this.props.skillsList)

    return (
      <Fragment>
        <section className="section-collapsible">
          <form
            className="form formjs"
            action="cardGenerator.html"
            method="post"
          >
            <Collapsable
              title="diseña"
              iconTitleClass="far fa-object-ungroup"
              iconArrowClass="fas fa-chevron-down"
              handleOnClickCollapsible={this.handleCollapsibleDesign}
              open={openCollapsibleDesign}
            >
              <div className="design__form hidden js-collapsible-form">
                <div className="design__form-colors">
                  <p className="design__text">
                    colores
                  </p>
                  <div className="design__palettes">
                    <div className="design__palette design__palette1">
                      <input
                        className="design__check-radio color-check" id="palette1"
                        type="radio"
                        name="palette"
                        value="1"
                        // checked
                        data-dest="green-card"
                        onChange={this.props.handleInputRadioColor}
                      />
                      <label
                        className="palette1__greens"
                        htmlFor="palette1"
                      >
                      </label>
                    </div>
                    <div className="design__palette design__palette2">
                      <input
                        className="design__check-radio color-check"
                        id="palette2"
                        type="radio"
                        name="palette"
                        value="2"
                        data-dest="red-card"
                        onChange={this.props.handleInputRadioColor}
                      />
                      <label
                        className="palette2__reds"
                        htmlFor="palette2"
                      >
                      </label>
                    </div>
                    <div className="design__palette design__palette3">
                      <input
                        className="design__check-radio color-check"
                        id="palette3"
                        type="radio"
                        name="palette"
                        value="3"
                        data-dest="blue-card"
                        onChange={this.props.handleInputRadioColor}
                      />
                      <label
                        className="palette3__blues"
                        htmlFor="palette3"
                      >
                      </label>
                    </div>
                  </div>
                </div>
                <div className="design__form-fonts">
                  <p className="design__text">
                    fuentes
                  </p>
                  <div className="design__letter-type">
                    <div className="design__type--common design__type--font1">
                      <input
                        className="design__check-radio font-check"
                        id="font1"
                        type="radio"
                        name="typography"
                        value="1"
                        data-font="ubuntu-card"
                        onChange={this.props.handleInputRadioTipo}
                      />
                      <label
                        className="font1"
                        htmlFor="font1"
                      >
                        ubuntu
                      </label>
                    </div>
                    <div className="design__type--common design__type--font2">
                      <input
                        className="design__check-radio font-check"
                        id="font2"
                        type="radio"
                        name="typography"
                        value="2"
                        data-font="comic-card"
                        // checked
                        onChange={this.props.handleInputRadioTipo}
                      />
                      <label
                        className="font2"
                        htmlFor="font2"
                      >
                        comic sans
                      </label>
                    </div>
                    <div className="design__type--common design__type--font3">
                      <input
                        className="design__check-radio font-check"
                        id="font3"
                        type="radio"
                        name="typography"
                        value="3"
                        data-font="montse-card"
                        onChange={this.props.handleInputRadioTipo}
                      />
                      <label
                        className="font3"
                        htmlFor="font3"
                      >
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
              handleOnClickCollapsible={this.handleCollapsibleFill}
              open={openCollapsibleFill}
            >
              <div className="hidden js-collapsible-form">
                <div className="section-collapsible__fill--form">
                  <label
                    className="fill-input"
                    for="nmb "
                  >
                    Nombre completo
                  </label>
                  <input
                    className="fill-input__placeholder js-personal-name input-style"
                    placeholder="Ej: Sally Jill"
                    id="nmb"
                    type="text"
                    name="name"
                    value={this.props.nameInputValue}
                    data-stringer="fullname"
                    onChange={this.props.handleInputName}
                  />
                  <label className="fill-input"
                    htmlFor="job "
                  >
                    Puesto
                  </label>
                  <input
                    className="fill-input__placeholder input-style"
                    placeholder="Ej: Front-end unicorn"
                    id="job"
                    type="text"
                    name="job"
                    value={this.props.jobInputValue}
                    data-stringer="profesion"
                    onChange={this.props.handleInputJob}
                  />
                  <label
                    type="file"
                    className="fill-input"
                    htmlFor="add-image"
                  >
                    Imagen de perfil
                  </label>
                  <div className="fill-input__image__square">
                    <button
                      type="button"
                      onClick={this.addImg}
                      className="fill-input__image"
                      name="button"
                    >
                      Añadir imagen
                    </button>
                    {/*<input className="fill-input__input" id="add-image" name="photo" type="file" value="Añadir imagen"/>*/}
                    <div className="square__white">
                    </div>
                  </div>
                  <label
                    className="fill-input"
                    htmlFor="emailaddress"
                  >
                    Email
                  </label>
                  <input
                    className="fill-input__placeholder input-style"
                    placeholder="Ej: sally-hill@gmail.com"
                    id="emailaddress"
                    type="email"
                    name="email"
                    value={this.props.emailInputValue}
                    data-stringer="mail-link"
                    onChange={this.props.handleInputMail}
                  />
                  <label
                    className="fill-input"
                    htmlFor="phone"
                  >
                    Teléfono
                  </label>
                  <input
                    className="fill-input__placeholder input-style"
                    placeholder="Ej: 555-55-55-55"
                    id="phone"
                    type="number"
                    name="phone"
                    value={this.props.telfInputValue}
                    data-stringer="mobile-link"
                    onChange={this.props.handleInputTelf}
                  />
                  <label
                    className="fill-input"
                    htmlFor="lkdn"
                  >
                    Linkedin
                  </label>
                  <input
                    className="fill-input__placeholder input-style"
                    placeholder="Ej:sally-hill"
                    id="lkdn"
                    type="url"
                    name="linkedin"
                    value={this.props.linkedinInputValue}
                    data-stringer="linkedin-link"
                    onChange={this.props.handleInputLinkedin}
                  />
                  <label
                    className="fill-input"
                    htmlFor="GH"
                  >
                    Github
                  </label>
                  <input
                    className="fill-input__placeholder input-style"
                    placeholder="Ej: sally-hill"
                    id="GH"
                    type="url"
                    name="github"
                    value={this.props.githubInputValue}
                    data-stringer="github-link"
                    onChange={this.props.handleInputGithub}
                  />
                  <div className="abilities-fill">
                    <label className="fill-input__abilities" for="">Habilidades (máximo 3)</label>
                    {selects}
                  </div>
                </div>
              </div>

            </Collapsable>

            <Collapsable
              title="comparte"
              iconTitleClass="fas fa-share-alt"
              iconArrowClass="fas fa-chevron-down"
              handleOnClickCollapsible={this.handleCollapsibleShare}
              open={openCollapsibleShare}
            >
              <div className="js-collapsible-form hidden">
                <div className="section-collapsible__share--button">
                  <button
                    className="btn-create-card js-btn-create-card"
                    onClick={this.createCard}
                    type="button"
                    name="button"
                  >
                    <span>
                      <i className="far fa-address-card">
                      </i>
                    </span>
                    CREAR TARJETA
                  </button>
                </div>
                <div className="section-collapsible__share--end js-hidden-twitter">
                  <p className="phrase">
                    La tarjeta ha sido creada:
                  </p>
                  {/* <!-- <a class="link-awesome" href="http://awesome-profile-card.com?id=S456DF0001"> http://awesome-profile-card.com?id=S456DF0001 </a> --> */}
                  <a
                    href="#"
                    className="link-awesome linkTwitter"
                  >
                  </a>
                  <button
                    className="btn-share btn-sharejs"
                    type="button"
                    onClick={this.twitterButtom}
                    name="button"
                  >
                    <span>
                      <i className="fab fa-twitter"></i>
                    </span>
                    Compartir en twitter
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
