import React from "react";
import If from "../operator/if";

export default function Nome(props) {
  return (
    <If test={!props.hide}>
      <div className='form-group has-feedback'>
        <input
          {...props.input}
          className='form-control input-classe'
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          type={props.type}
        />
        <span
          className={`label-classe glyphicon glyphicon-${props.icon}
  form-control-feedback`}
        >
          {props.label}
        </span>
      </div>
    </If>
  );
}
