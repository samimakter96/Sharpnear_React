import React from 'react';

const Button = (props) => {

  // destructure props to get btnName and handleClick
  const {btnName, handleClick} = props;

  return <button className="btn btn-primary mx-1" onClick={handleClick}>{btnName}</button>;
};

export default Button;
