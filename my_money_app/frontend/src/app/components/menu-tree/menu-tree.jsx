import React from "react";

export default (props) => (
  <li>
    <a href={props.path}>
      <i className={`fa fa-${props.icon}`}></i> {props.label}
      <i className="fa fa-angle-right pull-right"></i>
    </a>
    <ul className="treeview-menu">{props.children}</ul>
  </li>
);
