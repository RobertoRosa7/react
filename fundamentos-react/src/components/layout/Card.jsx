import React from "react";
import "./Card.css";

export default (props) => {
  const styles = {
    backgroundColor: props.color || '#EAEAEA',
    color:'#FFF'
  }
  return (
    <div className="cards">
      <div className="title" style={styles}>{props.titulo}</div>
      <div className="content">{props.children}</div>
    </div>
  );
};
