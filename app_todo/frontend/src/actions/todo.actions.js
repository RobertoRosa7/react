import axios from "axios";

const API = "http://localhost:3003/api/todos";

export const changeDescription = (e) => ({
  type: "DESCRIPTION_CHANGED",
  payload: e.target.value,
});

export const search = () => ({
  type: "TODO_SEARCHED",
  payload: axios.get(`${API}?sort=-createdAt`),
});
