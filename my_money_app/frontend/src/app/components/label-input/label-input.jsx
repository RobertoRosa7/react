import React from 'react'
import Grid from '../grid/grid'

export default props => (
  <Grid cols={props.cols}>
    <div className="form-group">
      <label htmlFor={props.label}>{props.label}</label>
      <input type={props.type} {...props.input} placeholder={props.placeholder} className="form-control"
        readOnly={props.readOnly} />
    </div>
  </Grid>
)