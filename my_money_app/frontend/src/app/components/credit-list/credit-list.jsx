import React from 'react'
import Grid from '../grid/grid'
import { Field } from 'redux-form'
import Input from './input'

class CreditList extends React.Component {
  renderRows() {
    const list = this.props.list || [1,2]
    return list.map((value, index) => (
      <tr key={index}>
        <td>
          <Field name={`credits[${index}.name]`} component={Input} placeholder="Informe o nome" readOnly={this.props.readOnly} />
        </td>
        <td>
          <Field name={`credits[${index}.value]`} component={Input} placeholder="Informe o valor" readOnly={this.props.readOnly} />
        </td>
        <td></td>
      </tr>
    ))
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