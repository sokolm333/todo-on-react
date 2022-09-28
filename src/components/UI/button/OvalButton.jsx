import React from 'react';
import classes from './OvalButton.module.css';

const OvalButton = ({ children, ...props }) => {

  return (
    <button {...props} className={classes.OvalButton}>
      {children}
    </button>
  );
};

export default OvalButton;