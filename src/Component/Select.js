import React, { Component } from 'react';


class Select extends Component {

  constructor(){
    super();
    this.state = {}
  };

  
  
  render() {
    console.log('weno weno weno', this.props.skillsList)
    const listSkill = this.props.skillsList;
    console.log('hola', listSkill);
    return (
        <div className="ability-box js-ability-box">
          <select 
            className="select-abilities js-select-abilities" 
            name="skills"
          >
          {
           listSkill.map(function(skill){
             return (<option key={skill}> {skill} </option>);
           })
         }
          </select>
          <button 
            className="button-abilities js-button-abilitiesPlus" 
            type="button" 
            name="button"
            onClick={this.props.handleAdd}
          >
            <i className="fas fa-plus">
            </i>
          </button>
        </div>
    )
  }
}

export default Select;