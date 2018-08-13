import React, { Component, Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const colors = {
    '1': 'green-card',
    '2': 'red-card',
    '3': 'blue-card'
}

const fonts = {
    '1': 'ubuntu-card ',
    '2': 'comic-card ',
    '3': 'montse-card'
}

const maxSelects = 3

let fr = new FileReader();

class CardGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            twitter: "js-hidden-twitter",
            skillsList: [],
            selectedSkills: [],
            url: "",
            data: {
                email: "",
                github: "",
                job: "",
                linkedin: "",
                name: "",
                palette: "1",
                phone: "",
                photo: "",
                typography: "2",
                skills: [],
            },
        }

        this.getPhoto = this.getPhoto.bind(this);
        this.handleChangeInputRadioColor = this.handleChangeInputRadioColor.bind(this);
        this.handleChangeInputRadioTipo = this.handleChangeInputRadioTipo.bind(this);
        this.handleChangeInputGithub = this.handleChangeInputGithub.bind(this);
        this.handleChangeInputName = this.handleChangeInputName.bind(this);
        this.handleChangeInputJob = this.handleChangeInputJob.bind(this);
        this.handleChangeInputLinkedin = this.handleChangeInputLinkedin.bind(this);
        this.handleChangeInputTelf = this.handleChangeInputTelf.bind(this);
        this.handleChangeInputMail = this.handleChangeInputMail.bind(this);
        this.handleLoadPhoto = this.handleLoadPhoto.bind(this);
        this.twitterButton = this.twitterButton.bind(this);
        this.callingAbilities = this.callingAbilities.bind(this);
        // this.retrievedLocalStorage = this.retrievedLocalStorage.bind(this);
        this.saveLocalStorage = this.saveLocalStorage.bind(this);
        this.jsonResponse = this.jsonResponse.bind(this);
        this.createCard = this.createCard.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSelect = this.handleSelect.bind(this)
        this.addSelect = this.addSelect.bind(this)
        this.removeSelect = this.removeSelect.bind(this)
        this.callingAbilities()
        this.profilePhoto = React.createRef();
        // this.retrievedLocalStorage();
    }

    componentDidMount() {
        this.retrievedLocalStorage();
    }
    //fetch 
    createCard() {
        const { data } = this.state
        fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(function (resp) {
                console.log("resp", resp);
                return resp.json();
            })
            .then((resp) => {
                console.log(resp.cardURL);
                this.setState({
                    url: resp.cardURL,
                });
            })
            .catch(function (error) {
                console.log(error);
            })
        if (this.state.twitter === "js-hidden-twitter") {
            const { twitter } = this.state
            this.setState({
                twitter: ""
            })
        }
    }

    //Recuperar localStorage
    retrievedLocalStorage() {
        console.log('y'); console.log('local')

        let retrievedData = localStorage.getItem('dataStoraged');
        console.log('datarecuperada', retrievedData);
        if (retrievedData !== null) {
            let dataParsed = JSON.parse(retrievedData);
            console.log('parseando', dataParsed);
            this.setState(
                { data: dataParsed }
            )
        }

    }

    //Crear loccalStorage
    saveLocalStorage() {
        localStorage.setItem('dataStoraged', JSON.stringify(this.state.data));
        console.log('localStorage', localStorage);
    }

    handleReset(event) {
        localStorage.clear();

        this.setState(
            {
                data: {
                    email: "",
                    github: "",
                    job: "",
                    linkedin: "",
                    name: "",
                    palette: "1",
                    phone: "",
                    photo: "",
                    typography: "2",
                    skills: [],
                }
            }
        )
    }

    handleChangeInputRadioColor(event) {
        this.setState({
            data: {
                ...this.state.data,
                palette: event.target.value
            }
        })
    }
    //   input file
    getPhoto(event) {
        this.profilePhoto.current.click();
    }


    handleLoadPhoto(event) {
        console.log('HOLAHOLA');

        this.profilePhoto.current.files[0];

        console.log('FR', fr);

        const writePhoto = () => {
            console.log('fr after load', fr);
            this.setState(
                {
                    data: {
                        ...this.state.data,
                        photo: fr.result
                    }
                }
            )
        }
        fr.addEventListener('load', writePhoto);
        fr.readAsDataURL(this.profilePhoto.current.files[0]);
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
            {
                skillsList: json.skills,
                selectedSkills: [json.skills[0]],

            }
        )
    }

    handleSelect(skill, i) {
        this.setState({
            //update element
            selectedSkills: this.state.selectedSkills
                .slice(0, i)
                .concat(skill, this.state.selectedSkills.slice(i + 1)),
            data: {
                ...this.state.data,
                skills: this.state.selectedSkills
            }
        })
    }

    addSelect() {
        if (this.state.selectedSkills.length < maxSelects) {
            this.setState({
                selectedSkills: this.state.selectedSkills.concat(this.state.skillsList[0]),
            })
        } else {
            console.log('Máximo 3 habilidades')
        }
    }

    removeSelect(i) {
        this.setState({
            selectedSkills: this.state.selectedSkills
                .slice(0, i)
                .concat(this.state.selectedSkills.slice(i + 1)),
        })
    }


    twitterButton() {
        window.location.href = `http://twitter.com/share?text=Tarjeta%20de%20de%20presentaci%C3%B3n%20con%20Awesome%20profile-cards%20(Brujas%20de%20appendChild%20-%20Sprint3%20de%20Adalab)&hashtags=WomenInTech&url=${this.props.createdLink}`;
    }

    render() {
        console.log('111111111111localStorage', localStorage);
        setTimeout(this.saveLocalStorage, 500);
        // localStorage.setItem('dataStoraged', JSON.stringify(this.state.data));

        console.log('state data', this.state.data);
        return (
            <Fragment>
                <Header />
                {
                    this.state.skillsList.length > 0
                        ? <Main
                            color={colors[this.state.data.palette]}
                            font={fonts[this.state.data.typography]}
                            data={this.state.data}
                            skillsList={this.state.skillsList}
                            selectedSkills={this.state.selectedSkills}
                            maxSelects={maxSelects}
                            handleSelect={this.handleSelect}
                            addSelect={this.addSelect}
                            removeSelect={this.removeSelect}
                            handleOnChangeColor={this.handleChangeInputRadioColor}
                            handleOnChangeTipo={this.handleChangeInputRadioTipo}
                            handleOnChangeGithub={this.handleChangeInputGithub}
                            handleOnChangeName={this.handleChangeInputName}
                            handleOnChangeTelf={this.handleChangeInputTelf}
                            handleOnChangeMail={this.handleChangeInputMail}
                            handleOnChangeLinkedin={this.handleChangeInputLinkedin}
                            handleOnChangeJob={this.handleChangeInputJob}
                            handleOnChangePhoto={this.handleLoadPhoto}
                            twitterButton={this.twitterButton}
                            handleReset={this.handleReset}
                            getPhoto={this.getPhoto}
                            refInput={this.profilePhoto}
                            miniPhoto={this.state.data.photo}
                            createCard={this.createCard}
                            createdLink={this.state.url}
                            hiddenTwitter={this.state.twitter}
                        />
                        : <div>Cargando...</div>
                }
                <Footer />
            </Fragment>

        );
    }
}

export default CardGenerator;