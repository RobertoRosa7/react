import React from "react";

export default (props) => (
  <div className="content-header">
    <h1>
      {props.title} <small>{props.small}</small>
    </h1>
  </div>
);
