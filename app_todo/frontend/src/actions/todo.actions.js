import axios from "axios";

const API = "http://localhost:3003/api/todos";

export const changeDescription = (e) => ({
  type: "DESCRIPTION_CHANGED",
  payload: e.target.value,
});

// sem middleware thunk
// export const search = (description) => ({
//   type: "TODO_SEARCHED",
//   payload: axios.get(
//     `${API}?sort=-createdAt${
//       description ? "&description__regex=/" + description + "/" : ""
//     }`
//   ),
// });

// com middleware thunk
export const search = () => (dispatch, getState) =>
  axios
    .get(
      `${API}?sort=-createdAt${
        getState().todo.description
          ? "&description__regex=/" + getState().todo.description + "/"
          : ""
      }`
    )
    .then((res) => dispatch({ type: "TODO_SEARCHED", payload: res.data }));

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
    .then(() => dispatch(clear()))
    .then(() => dispatch(search()));

export const markAsDone = (todo) => (dispatch) =>
  axios
    .put(`${API}/${todo._id}`, { ...todo, done: true })
    .then(() => dispatch(search()));

export const markAsPending = (todo) => (dispatch) =>
  axios
    .put(`${API}/${todo._id}`, { ...todo, done: false })
    .then(() => dispatch(search()));

export const remove = (todo) => (dispatch) =>
  axios.delete(`${API}/${todo._id}`).then(() => dispatch(search()));

export const clear = () => [
  {
    type: "TODO_CLEAR",
  },
  search(),
];
