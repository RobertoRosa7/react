import React from 'react'
import Grid from '../grid/grid'
import { Field } from 'redux-form'

class CreditList extends React.Component {
  renderRows() {
    return (
      <tr>
        <td><Field name="???" component="input" /></td>
        <td><Field name="???" component="input" /></td>
        <td></td>
      </tr>
    )
  }
  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>Creditos</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </fieldset>
      </Grid>
    )
  }
}

export default CreditList