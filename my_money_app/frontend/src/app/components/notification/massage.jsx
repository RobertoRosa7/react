import React from 'react'
import ReduxToast from 'react-redux-toastr'
import 'modules/react-redux-toastr/lib/css/react-redux-toastr.css'

export default props => (<ReduxToast timeOut={3000} newestOnTop={false} preventDuplicates={true} position="top-right" transitionIn="fadeIn" transitionOut="fadeOut" progressBar />)