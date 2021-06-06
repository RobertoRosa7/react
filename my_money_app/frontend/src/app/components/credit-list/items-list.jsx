import React from 'react'
import Grid from '../grid/grid'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import Input from './input'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ItemsList extends React.Component {

  add(index, item = {}) {
    if (!this.props.readOnly) {
      this.props.arrayInsert('form-billing-cycles', 'credits', index, item)
    }
  }

  remove(index) {
    if (!this.props.readOnly && this.props.list.length > 1) {
      this.props.arrayRemove('form-billing-cycles', 'credits', index)
    }
  }

  renderRows() {
    const list = this.props.list || []
    return list.map((value, index) => (
      <tr key={index}>
        <td>
          <Field name={`credits[${index}.name]`} component={Input} placeholder="Informe o nome" readOnly={this.props.readOnly} />
        </td>
        <td>
          <Field name={`credits[${index}.value]`} component={Input} placeholder="Informe o valor" readOnly={this.props.readOnly} />
        </td>
        <td>
          <button onClick={() => this.add(index + 1)} type="button" className="btn btn-success">
            <i className="fa fa-plus"></i>
          </button>
          <button onClick={() => this.add(index + 1, value)} type="button" className="btn btn-warning">
            <i className="fa fa-clone"></i>
          </button>
          <button onClick={() => this.remove(index)} type="button" className="btn btn-danger">
            <i className="fa fa-remove"></i>
          </button>
        </td>
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
                <th style={{
                  display: 'flex'
                }}>Ações</th>
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
const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(null, mapDispatchToProps)(ItemsList)