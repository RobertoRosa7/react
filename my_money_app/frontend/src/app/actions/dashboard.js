import axios from "axios";

const API_V1 = "http://localhost:3003/api";

export const getSummary = () => ({
  type: "[GET_SUMMARY]",
  payload: axios.get(`${API_V1}/billingCycles/summary`),
});
