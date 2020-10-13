import React from "react";
import "./Card.css";

export default (props) => {
  return (
    <div className="cards">
      <h1 className="title">{props.titulo}</h1>
      <p className="content">{props.children}</p>
    </div>
  );
};
