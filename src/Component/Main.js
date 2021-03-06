import React, { Component } from 'react';
import Preview from './preview';
import Form from './Form';


class Main extends Component {


  render() {

    const {
      skills,
      job,
      name,
      email,
      linkedin,
      github,
      phone,
      palette,
      photo
    } = this.props.data;
    const {
      color,
      miniPhoto,
      createCard,
      createdLink,
      hiddenTwitter,
      font,
      twitterButton
    } = this.props;

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
          selectedSkills={this.props.selectedSkills}
        />
        <Form
          skillsList={this.props.skillsList}
          selectedSkills={this.props.selectedSkills}
          maxSelects={this.props.maxSelects}
          handleSelect={this.props.handleSelect}
          addSelect={this.props.addSelect}
          removeSelect={this.props.removeSelect}
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
          hiddenTwitter={hiddenTwitter}
          twitterButton={twitterButton}
        />
      </div>
    );
  }
}

export default Main;
