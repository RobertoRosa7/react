import axios from "axios"
import { toastr } from 'react-redux-toastr'
import { initialize, reset as resetForm } from 'redux-form'
import { selectTab, showTab } from '../actions/tab-actions'

const API = "http://127.0.0.1:3003/api"

export const getList = () => ({
  type: "[BILLING_CYCLES_FETCHED]",
  payload: axios.get(`${API}/billingCycles`),
})

// method action simple
// export const create = (values) => ({
//   type: "[BILLING_CYCLES_CREATED]",
//   payload: axios.post(`${API}/billingCycles`, values)
//     .then(() => toastr.success('Sucesso', 'Operação realizado com sucesso.'))
//     .catch(e => e.response.data.errors.forEach(e => toastr.error('Error', e)))
// })

// method action mult
export const create = (values) => {
  return dispatch => {
    axios.post(`${API}/billingCycles`, values)
      .then(() => {
        toastr.success('Sucesso', 'Operação realizado com sucesso.')

        // dispatch([]) array somente com redux-mult
        dispatch(init())
      })
      .catch(e => e.response.data.errors.forEach(e => toastr.error('Error', e)))
  }
}

export const showUpdate = (billingCycle) => [
  showTab('tabUpdate'),
  selectTab('tabUpdate'),
  initialize('form-billing-cycles', billingCycle)
]

export const init = () => [
  showTab('tabList', 'tabCreate'),
  selectTab('tabList'),
  getList(),
  initialize('form-billing-cycles', {})
]