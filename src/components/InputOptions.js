import React from "react";
import "./InputOptions.css";
const InputOptions = ({ Icon, title, color }) => {
  return (
    <div className='inputOptions'>
      <Icon style={{ color: color }} />
      <h4 className='inputoptions__title'>{title}</h4>
    </div>
  );
};

export default InputOptions;
