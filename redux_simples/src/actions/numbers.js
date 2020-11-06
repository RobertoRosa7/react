// Action Creator

export const actions = {
  changeNumMin: function (n) {
    return {
      type: "MIN_NUMBER_CHANGED",
      payload: n,
    };
  },
  changeNumMax: function (n) {
    return {
      type: "MAX_NUMBER_CHANGED",
      payload: n,
    };
  },
};
