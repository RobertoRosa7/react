import axios from "axios"
import { toastr } from 'react-redux-toastr'

const API = "http://127.0.0.1:3003/api"

export const getList = () => ({
  type: "[BILLING_CYCLES_FETCHED]",
  payload: axios.get(`${API}/billingCycles`),
})

export const create = (values) => ({
  type: "[BILLING_CYCLES_CREATED]",
  payload: axios.post(`${API}/billingCycles`, values)
    .then(() => toastr.success('Sucesso', 'Operação realizado com sucesso.'))
    .catch(e => e.response.data.errors.forEach(e => toastr.error('Error', e)))
})