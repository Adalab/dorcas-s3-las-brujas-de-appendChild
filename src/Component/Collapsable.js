import React, { Component } from 'react';
import Form from './Form'

class Collapsable extends Component {
  render() {
  const {iconTitleClass,title, iconArrowClass, children,open}= this.props;
  console.log(this.props);
  let classToOpen = "";
  if(open===true){
  classToOpen = "js-collapsible-visible";
  }
    return (
         <fieldset className={`fieldset__container ${classToOpen} js-collapsible-select`}>
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
