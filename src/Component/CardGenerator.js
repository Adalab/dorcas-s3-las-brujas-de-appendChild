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

let fr = new FileReader();

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
                palette: "1",
                phone: "",
                photo: "images/image-card.png",
                typography: "2",
                skills: ['HTML','git'],
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
        this.callingAbilities = this.callingAbilities.bind(this);
        this.retrievedLocalStorage = this.retrievedLocalStorage.bind(this);
        this.jsonResponse = this.jsonResponse.bind(this);
        this.callingAbilities()
        this.profilePhoto= React.createRef();
        this.retrievedLocalStorage();
    }

    componentWillMount(){
        this.retrievedLocalStorage();
    }

    //Recuperar localStorage
    retrievedLocalStorage(){
        console.log('y');
        let savedData = JSON.parse(localStorage.getItem('dataStoraged'));
        this.setState(
            {data : savedData}
        )
    }

    //Crear loccalStorage
    // saveLocalStorage(){
        
    // }

    handleChangeInputRadioColor(event) {
        this.setState({
            data: {
                ...this.state.data,
                palette: event.target.value
            }
        })
    }
//   input file
    getPhoto(event){
        console.log('BUBUBU', this.profilePhoto.current)
        this.profilePhoto.current.click();
    }

    
    handleLoadPhoto(event){   
        console.log('HOLAHOLA'); 

        this.profilePhoto.current.files[0];
        
        console.log('FR',fr);
        
        const writePhoto = ()=>{
            console.log('fr after load',fr);
            this.setState(
                {
                    data:{
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
            { skillsList: json.skills }
        )
    }

    render() {
        
        
        localStorage.setItem('dataStoraged', JSON.stringify(this.state.data));
        console.log('localStorage',localStorage);
        console.log('state data', this.state.data);
        return (
            <Fragment>
                <Header />
                {
                    this.state.skillsList.length > 0 
                        ?<Main 
                            color={colors[this.state.data.palette]}
                            font={fonts[this.state.data.typography]}
                            data={this.state.data}
                            skillsList={this.state.skillsList}
                            handleOnChangeColor={this.handleChangeInputRadioColor}
                            handleOnChangeTipo={this.handleChangeInputRadioTipo}
                            handleOnChangeGithub={this.handleChangeInputGithub}
                            handleOnChangeName={this.handleChangeInputName}
                            handleOnChangeTelf={this.handleChangeInputTelf}
                            handleOnChangeMail={this.handleChangeInputMail}
                            handleOnChangeLinkedin={this.handleChangeInputLinkedin}
                            handleOnChangeJob={this.handleChangeInputJob} 
                            handleOnChangePhoto={this.handleLoadPhoto}
                            getPhoto={this.getPhoto}
                            refInput={this.profilePhoto}
                            /> 
                            : <div>Cargando...</div>
                }
                <Footer />
            </Fragment>

        );
    }
}

export default CardGenerator;