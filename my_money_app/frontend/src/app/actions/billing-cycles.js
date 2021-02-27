import axios from "axios";
const API = "http://127.0.0.1:3003/api";

export const getList = () => ({
  type: "[BILLING_CYCLES_FETCHED]",
  payload: axios.get(`${API}/billingCycles`),
});

export const create = (values) => ({
  type: "[BILLING_CYCLES_CREATED]",
  payload: axios.post(`${API}/billingCycles`, values),
})