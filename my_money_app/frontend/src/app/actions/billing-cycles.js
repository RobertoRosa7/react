import axios from "axios"
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { selectTab, showTab } from '../actions/tab-actions'

const API = "http://127.0.0.1:3003/api"
const INITIAL_VALUES = { credits: [{}], debits: [{}] }

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

export const create = (values) => submit(values, 'post')
export const update = (values) => submit(values, 'put')
export const del = (values) => submit(values, 'delete')


export const showUpdate = (billingCycle) => [
  showTab('tabUpdate'),
  selectTab('tabUpdate'),
  initialize('form-billing-cycles', billingCycle)
]

export const showDelete = (billingCycle) => [
  showTab('tabDelete'),
  selectTab('tabDelete'),
  initialize('form-billing-cycles', billingCycle)
]

export const init = () => [
  showTab('tabList', 'tabCreate'),
  selectTab('tabList'),
  getList(),
  initialize('form-billing-cycles', INITIAL_VALUES)
]

// method action mult
const submit = (values, method) => {
  console.log(values)
  return dispatch => {
    const id = values._id ? values._id : ''
    axios[method](`${API}/billingCycles/${id}`, values)
      .then(() => {
        toastr.success('Sucesso', 'Operação realizado com sucesso.')
        dispatch(init())// dispatch([]) array somente com redux-mult
      })
      .catch(e => e.response.data.errors.forEach(err => toastr.error('Error', err)))
  }
}