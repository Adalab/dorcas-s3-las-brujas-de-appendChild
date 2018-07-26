import React, { Component } from 'react';
import Form from './Form'

class Collapsable extends Component {
  render() {
  const {iconTitleClass,title, iconArrowClass, children}= this.props;
    return (
         <fieldset className="fieldset__container js-collapsible-visible js-collapsible-select">
          <div className="section-collapsible--title js-collapsible-title">
            <span className="icon-title">
              <i className={iconTitleClass}></i>
            </span>
            <legend className="legend__title">{title}</legend>
            <span className="icon-down">
              <i className={`${iconArrowClass} jsRotate`}></i>
            </span>
          </div>
          {children}
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

// fas fa-chevron-down

export default Collapsable;
