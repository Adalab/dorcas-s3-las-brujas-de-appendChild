import React, { Component } from 'react';


class Select extends Component {

  constructor(){
    super();
    this.state = {}
  };

  
  
  render() {
    return (
        <div className="ability-box js-ability-box">
          <select 
            className="select-abilities js-select-abilities" 
            name="skills"
          >
          </select>
          <button 
            className="button-abilities js-button-abilitiesPlus" 
            type="button" 
            name="button"
          >
            <i className="fas fa-plus">
            </i>
          </button>
        </div>
    )
  }
}

export default Select;