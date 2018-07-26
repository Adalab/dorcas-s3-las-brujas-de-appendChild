import React, { Component } from 'react';
import Form from './Form'

class Collapsable extends Component {
  render() {
    return (    <fieldset className="design__container js-collapsible-visible js-collapsible-select">
          <div className="design__title js-collapsible-title">
            <legend className="legend__title design-title__legend">
              <i className="icon-title far fa-object-ungroup"></i> diseña
            </legend>
            <span>
              <i className="design__icon-legend fas fa-chevron-down jsRotate"></i>
            </span>
          </div>
          {this.props.children}
        </fieldset>)
  }
}

{/*  <fieldset className="section-collapsible__share  js-collapsible-select">
    <div className="section-collapsible__share--title js-collapsible-title">
      <span className="icon-title">
        <i className="fas fa-share-alt"></i>
      </span>
      <legend className="legend__title share-legend">comparte</legend>
      <span className="icon-down">
        <i className="fas fa-chevron-down jsRotate"></i>
      </span>
    </div> */}


    {/* <fieldset className="section-collapsible__fill js-collapsible-select">
        <div className="section-collapsible__fill--title js-collapsible-title">
          <span className="icon-title">
            <i className="far fa-keyboard"></i>
          </span>
          <legend className="legend__title fill-legend">rellena</legend>
          <span className="icon-down">
            <i className="fas fa-chevron-down jsRotate"></i>
          </span>
        </div> */}



export default Collapsable;
