import React from "react";
import If from "../template/if";

export default (props) => (
  <If test={!props.hide}>
    <button style={{margin:'0 2px'}} onClick={props.onClick} className={"btn btn-" + props.style}>
      <i className={"fa fa-" + props.icon}></i>
    </button>
  </If>
);
