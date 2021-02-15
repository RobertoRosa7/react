const INITIAL_STATE = { summary: { credit: 0, debt: 50 } };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "[GET_SUMMARY]":
      console.log(action.payload.data);
      return { ...state, summary: action.payload.data };
    default:
      return state;
  }
}
