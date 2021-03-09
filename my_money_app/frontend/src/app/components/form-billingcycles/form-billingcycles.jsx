import React from 'react'
import { Field, reduxForm } from 'redux-form'
import LabelInput from '../../components/label-input/label-input'

class FormBillingCycles extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field name="name" component={LabelInput} label="Nome" placeholder="Informe seu nome" cols="12 4" />
          <Field name="month" component={LabelInput} label="Mês" type="number" placeholder="Informe o mês" cols="12 4"/>
          <Field name="year" component={LabelInput} label="Ano" type="number" placeholder="Informe o ano" cols="12 4"/>
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({ form: 'form-billing-cycles' })(FormBillingCycles)