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
        //const selectsArr = this.props.selectsArr[0];
        this.state = {
            skillsList: [],
            selectsArr: [],
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
        this.handleSelect = this.handleSelect.bind(this);
        this.addSelect = this.addSelect.bind(this);
        this.removeSelect = this.removeSelect.bind(this);
        this.handleLoadPhoto = this.handleLoadPhoto.bind(this);
        this.callingAbilities = this.callingAbilities.bind(this);
        this.jsonResponse = this.jsonResponse.bind(this);
        this.callingAbilities();
        this.profilePhoto= React.createRef();
        const maxSelects = 3;
    }
    handleSelect(skill, i) {
        this.setState({
            skillsList: this.state.skillsList.slice(0, i).concat(skill, this.state.skillsList.slice(i + 1))
        })
    }
    addSelect() {
        if (this.state.skillsList.length < this.maxSelects) {
          this.setState({
            skillsList: this.state.skillsList.concat(this.props.selectsArr[0])
          })
        } else {
          console.log('Máximo 3 habilidades')
        }
      }
    
    removeSelect(i) {
        this.setState({
            skillsList: this.state.skillsList.slice(0, i).concat(this.state.skillsList.slice(i + 1))
        })
    
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
                            skillsList={[this.state.skillsList[0]]}
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
                            selectsArr={this.props.selectsArr}
                            /> 
                            : <div>Cargando...</div>
                }

                <Footer />
            </Fragment>

        );
    }
}

export default CardGenerator;