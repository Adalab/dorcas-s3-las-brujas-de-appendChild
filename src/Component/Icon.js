import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

class Icon extends Component {
    render() {
      return (
        <li className="card__social--li">
          <a className={`button-card js-social ${this.props.classA}`} id={this.props.id} href={this.props.link} title={this.props.title} target="_blank">
            <i className={`${this.props.classI} js-icon`}></i>
          </a>
        </li>  
      )
    }
  }


export default Icon;