import React from "react";
import Grid from "../grid/grid";

export default (props) => {
  const textNegative = {
    color: handleTextNegative(props.value) < 0 ? "#dd4b39" : "#FFFFFF",
  };

  function handleTextNegative(text) {
    return parseFloat(text.replace("R$", "").trim());
  }

  return (
    <Grid cols={props.cols}>
      <div className={`small-box bg-${props.color}`}>
        <div className="inner">
          <h3 style={textNegative}>{props.value}</h3>
          <p>{props.text}</p>
        </div>
        <div className="icon">
          <i className={`fa fa-${props.icon}`}></i>
        </div>
      </div>
    </Grid>
  );
};
