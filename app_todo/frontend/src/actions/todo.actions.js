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

// sem middleware thunk
// export const add = (description) => [
//   {
//     type: "TODO_ADDED",
//     payload: axios.post(API, { description }),
//   },
//   search(),
// ];

// com middleware thunk
export const add = (description) => (dispatch) =>
  axios
    .post(API, { description })
    .then((res) => dispatch({ type: "TODO_ADDED", payload: res.data }))
    .then((res) => dispatch(search()));
