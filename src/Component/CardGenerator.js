import React, { Component, Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PropTypes from 'prop-types';
const colors = {
    '1': 'green-card',
    '2': 'red-card',
    '3': 'blue-card'
}



class CardGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skillsList: [],
            data: {
                email: "",
                github: "",
                job: "",
                linkedin: "",
                name: "",
                palette: "2",
                phone: "",
                photo: "images/image-card.png",
                typography: 2,
                skills: [],
            },
        }
        this.handleChangeInputRadioColor = this.handleChangeInputRadioColor.bind(this);
        this.handleChangeInputRadioTipo = this.handleChangeInputRadioTipo.bind(this);
        this.handleChangeInputGithub = this.handleChangeInputGithub.bind(this);
        this.handleChangeInputName = this.handleChangeInputName.bind(this);
        this.handleChangeInputJob = this.handleChangeInputJob.bind(this);
        this.handleChangeInputLinkedin = this.handleChangeInputLinkedin.bind(this);
        this.handleChangeInputTelf = this.handleChangeInputTelf.bind(this);
        this.handleChangeInputMail = this.handleChangeInputMail.bind(this);
        this.callingAbilities = this.callingAbilities.bind(this);
        this.jsonResponse = this.jsonResponse.bind(this);
        this.callingAbilities()
    }

    handleChangeInputRadioColor(event) {
        console.log('checkeandooooooo');
        this.setState({
            data: {
                ...this.state.data,
                palette: event.target.value
            }
        })
    }

    handleChangeInputRadioTipo(event) {
        this.setState({
            data: {
                ...this.state.data,
                typography: event.target.value
            }
        })
    }

    handleChangeInputGithub(e) {
        this.setState({
            data: {
                ...this.state.data,
                github: e.target.value
            }
        }, )

    }
    handleChangeInputName(e) {
        this.setState({
            data: {
                ...this.state.data,
                name: e.target.value
            }
        }, )

    }
    handleChangeInputMail(e) {

        this.setState({
            data: {
                ...this.state.data,
                email: e.target.value
            }
        }, )

    }
    handleChangeInputTelf(e) {

        this.setState({
            data: {
                ...this.state.data,
                phone: e.target.value
            }
        }, )

    }
    handleChangeInputJob(e) {

        this.setState({
            data: {
                ...this.state.data,
                job: e.target.value
            }
        }, )

    }
    handleChangeInputLinkedin(e) {

        this.setState({
            data: {
                ...this.state.data,
                linkedin: e.target.value
            }
        }, )

    }
    //hacer método y bind de funcion json dentro de constructor
    callingAbilities() {

        fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
            .then(function (response) {
                return response.json();
            })
            .then(this.jsonResponse)

    }

    jsonResponse(json) {
        this.setState(
            { skillsList: json.skills }
        )
    }

    render() {
        console.log('state data', this.state.data);
        return (
            <Fragment>
                <Header />
                {
                    this.state.skillsList.length > 0 ?
                        <Main color={colors[this.state.data.palette]}
                            data={this.state.data}
                            skillsList={this.state.skillsList}
                            handleOnChangeColor={this.handleChangeInputRadioColor}
                            handleOnChangeTipo={this.handleChangeInputRadioTipo}
                            handleOnChangeGithub={this.handleChangeInputGithub}
                            handleOnChangeName={this.handleChangeInputName}
                            handleOnChangeTelf={this.handleChangeInputTelf}
                            handleOnChangeMail={this.handleChangeInputMail}
                            handleOnChangeLinkedin={this.handleChangeInputLinkedin}
                            handleOnChangeJob={this.handleChangeInputJob} /> : <div>Cargando...</div>
                }

                <Footer />
            </Fragment>

        );
    }
}

CardGenerator.propTypes = {
    job: PropTypes.string,
    github: PropTypes.string,
    linkedin: PropTypes.string,
    mail: PropTypes.string,
    telf: PropTypes.number,
    firstName: PropTypes.string,
    /* resetButtom: PropTypes.string,
    reset: PropTypes.string, */
  }


export default CardGenerator;