import axios from "axios";

const API_V1 = "http://127.0.0.1:3003/api";

export const getSummary = () => ({
  type: "[GET_SUMMARY]",
  payload: axios.get(`${API_V1}/billingCycles/summary`),
});
