import React from "react";
import Grid from "../layout/grid";

export default props => (
  <Grid cols={props.cols}>
    <div className='form-group'>
      <label htmlFor={props.name} className='label-classe'>{props.label}</label>  
     
      <input
        {...props.input}
        className='form-control input-classe'
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type}
      />
    </div>
  </Grid>
);
