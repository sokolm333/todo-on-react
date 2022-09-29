import React from 'react';
import classes from './OvalButton.module.css';

const OvalButton = React.forwardRef((props, ref) => {
  return (
    <button {...props} ref={ref} className={props.fill != "true" ? classes.Button : classes.ButtonFill}>
      {props.children}
    </button>
  );
});

export default OvalButton;