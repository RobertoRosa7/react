import React from "react";
import "./Card.css";

export default (props) => {
  const styles = {
    backgroundColor: props.color || '#EAEAEA',
    color:'#FFF'
  }
  return (
    <div className="cards">
      <h1 className="title" style={styles}>{props.titulo}</h1>
      <p className="content">{props.children}</p>
    </div>
  );
};
