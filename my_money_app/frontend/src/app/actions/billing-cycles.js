import axios from "axios";
const API = "http://127.0.0.1:3003/api";

export const getList = () => ({
  type: "[BILLING_CYCLES_FETCHED]",
  payload: axios.get(`${API}/billingCycles`),
});
