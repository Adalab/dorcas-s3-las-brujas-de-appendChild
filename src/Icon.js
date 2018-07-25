import React, { Component } from 'react';

class Icon extends Component {
    render() {
      return (

              <li className="card__social--li">
                <a className="button-card js-social" id={this.props.classID} href={this.props.link} title={this.props.title} target="_blank">
                  <i className={this.props.classI}></i>
                </a>
              </li>
              
      )
      
    }
  }




export default Icon;