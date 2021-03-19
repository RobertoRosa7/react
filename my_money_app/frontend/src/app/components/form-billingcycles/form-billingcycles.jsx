import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import LabelInput from '../../components/label-input/label-input'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { init } from '../../actions/billing-cycles'
import CreditList from '../credit-list/credit-list'

class FormBillingCycles extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const { handleSubmit, readOnly, credits } = this.props
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field readOnly={readOnly} name="name" component={LabelInput} label="Nome" placeholder="Informe seu nome"
            cols="12 4" />
          <Field readOnly={readOnly} name="month" component={LabelInput} label="Mês" type="number"
            placeholder="Informe o mês" cols="12 4" />
          <Field readOnly={readOnly} name="year" component={LabelInput} label="Ano" type="number"
            placeholder="Informe o ano" cols="12 4" />
          <CreditList cols="12 6" list={credits} readOnly={readOnly} />
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
          <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
        </div>
      </form>
    )
  }
}

FormBillingCycles = reduxForm({ form: 'form-billing-cycles', destroyOnUnmount: false })(FormBillingCycles)

const selector = formValueSelector('form-billing-cycles')
const mapStateToProps = state => ({ credits: selector(state, 'credits') })
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormBillingCycles)