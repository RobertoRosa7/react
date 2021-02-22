import React from 'react'

class FormBillingCycles extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <form>
        <div className="box-body"></div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    )
  }
}

export default FormBillingCycles