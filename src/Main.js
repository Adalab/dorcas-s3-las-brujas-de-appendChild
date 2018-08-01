import React, { Component } from 'react';
import Preview from './Component/preview';
import Form from './Component/Form';


class Main extends Component {
  constructor(props){
    super(props);
    console.log(props);
    console.log('thisstate',this.state);
    
  }
  render() {
    const {skills, job, name, email, linkedin, github, phone,} = this.props.data;
    const {color}= this.props;
    return (
      <div>
       <Preview
        skills={skills}
        job={job}
        firstName={name}
        mail={email}
        linkedin={linkedin}
        github={github}
        telf={phone}
        colorPalette={color}
      /> 
      <Form skillsList= {this.props.skillsList}/>
      </div>
    );
  }
}

export default Main;
