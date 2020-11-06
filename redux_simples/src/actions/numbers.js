// Action Creator

// export const actions = {
//   changeNumMin: function (n) {
//     return {
//       type: "MIN_NUMBER_CHANGED",
//       payload: n,
//     };
//   },
//   changeNumMax: function (n) {
//     return {
//       type: "MAX_NUMBER_CHANGED",
//       payload: n,
//     };
//   },
// };

export function changeNumMin(n) {
  return {
    type: "MIN_NUMBER_CHANGED",
    payload: n,
  };
}

export function changeNumMax(n) {
  return {
    type: "MAX_NUMBER_CHANGED",
    payload: n,
  };
}
