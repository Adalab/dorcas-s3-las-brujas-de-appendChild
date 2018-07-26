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

export default Collapsable;
