import React from 'react';
import classes from './OvalButton.module.css';

const OvalButton = ({ children, ...props }) => {
  return (
    <button {...props} className={props.fill != "true" ? classes.Button : classes.ButtonFill}>
      {children}
    </button>
  );
};

export default OvalButton;