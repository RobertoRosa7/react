import React from "react";
import Grid from "../grid/grid";

export default (props) => (
  <Grid cols={props.cols}>
    <div className={`small-box bg-${props.color}`}></div>
  </Grid>
);
