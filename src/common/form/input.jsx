import React from "react";

export default props => (
  <input
    {...props.input}
    className='form-control input-classe'
    placeholder={props.placeholder}
    readOnly={props.readOnly}
    type={props.type}
  />
);
