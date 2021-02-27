import React from 'react'
import { Field, reduxForm } from 'redux-form'

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
          <Field name="name" component="input" />
          <Field name="month" component="input" />
          <Field name="year" component="input" />
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({ form: 'form-billing-cycles' })(FormBillingCycles)