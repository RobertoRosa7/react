import React from 'react'
import { Field, reduxForm } from 'redux-form'
import LabelInput from '../../components/label-input/label-input'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { init } from '../../actions/billing-cycles'

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
          <Field name="month" component={LabelInput} label="Mês" type="number" placeholder="Informe o mês" cols="12 4" />
          <Field name="year" component={LabelInput} label="Ano" type="number" placeholder="Informe o ano" cols="12 4" />
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
        </div>
      </form>
    )
  }
}

FormBillingCycles = reduxForm({ form: 'form-billing-cycles', destroyOnUnmount: false })(FormBillingCycles)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(FormBillingCycles)