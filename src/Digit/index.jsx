import React from 'react';
import './style.css';

const Digit = (props) => {
  return <span className={props.digit ? 'green' : 'red'}> {props.char}</span>;
};

export default Digit;
