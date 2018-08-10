import React, { Component } from 'react';
import Preview from './preview';
import Form from './Form';


class Main extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {skills, job, name, email, linkedin, github, phone,palette,photo} = this.props.data;
    const {color,selectsArr}= this.props;
    const {font}=this.props;
    return (
      <div className= "cardGenerator__main">
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
        /> 
        <Form 
          skillsList= {this.props.skillsList}
          handleInputRadioColor = {this.props.handleOnChangeColor}
          handleInputRadioTipo = {this.props.handleOnChangeTipo}
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
          selectsArr={selectsArr}
        />
      </div>
    );
  }
}

export default Main;
