import React, { Component } from 'react';
import Preview from './preview';
import Form from './Form';

const maxSelects = 3

class Main extends Component {
  constructor(props) {
    super(props)
    const initialSkill = this.props.skillsList[0]
    this.state = {
      selectsArr: [initialSkill],
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.addSelect = this.addSelect.bind(this)
    this.removeSelect = this.removeSelect.bind(this)
  }
  handleSelect(skill, i) {
    this.setState({
      //update element
      selectsArr: this.state.selectsArr
        .slice(0, i)
        .concat(skill, this.state.selectsArr.slice(i + 1)),
    })
  }

  addSelect() {
    if (this.state.selectsArr.length < maxSelects) {
      this.setState({
        selectsArr: this.state.selectsArr.concat(this.props.skillsList[0]),
      })
    } else {
      console.log('Máximo 3 habilidades')
    }
  }

  removeSelect(i) {
    this.setState({
      selectsArr: this.state.selectsArr
        .slice(0, i)
        .concat(this.state.selectsArr.slice(i + 1)),
    })
  }

  render() {
    const { skills, job, name, email, linkedin, github, phone, palette, photo } = this.props.data;
    const { color, miniPhoto, createCard, createdLink } = this.props;
    const { font } = this.props;
    return (
      <div className="cardGenerator__main">
        <Preview
          skills={skills}
          job={job}
          firstName={name}
          mail={email}
          linkedin={linkedin}
          github={github}
          telf={phone}
          colorPalette={color}
          photo={photo}
          colortypo={font}
          handleReset={this.props.handleReset}
          selectedSkills={this.state.selectsArr}
        />
        <Form
          skillsList={this.props.skillsList}
          selectedSkills={this.state.selectsArr}
          maxSelects={maxSelects}
          handleSelect={this.handleSelect}
          addSelect={this.addSelect}
          removeSelect={this.removeSelect}
          handleInputRadioColor={this.props.handleOnChangeColor}
          handleInputRadioTipo={this.props.handleOnChangeTipo}
          handleInputGithub={this.props.handleOnChangeGithub}
          handleInputName={this.props.handleOnChangeName}
          handleInputJob={this.props.handleOnChangeJob}
          handleInputTelf={this.props.handleOnChangeTelf}
          handleInputMail={this.props.handleOnChangeMail}
          handleInputLinkedin={this.props.handleOnChangeLinkedin}
          handleOnChangePhoto={this.props.handleOnChangePhoto}
          getPhoto={this.props.getPhoto}
          refInput={this.props.refInput}
          githubInputValue={github}
          linkedinInputValue={linkedin}
          telfInputValue={phone}
          emailInputValue={email}
          jobInputValue={job}
          nameInputValue={name}
          valuePalette={palette}
          miniPhoto={miniPhoto}
          createCard={createCard}
          createdLink={createdLink}
        />
      </div>
    );
  }
}

export default Main;
