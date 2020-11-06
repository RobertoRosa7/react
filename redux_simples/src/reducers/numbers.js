import {
  MAX_NUMBER_CHANGED,
  MIN_NUMBER_CHANGED,
} from "../actions/actions-types";

const initialState = {
  min: 1,
  max: 10,
};
export default function reduxNumbers(state = initialState, action) {
  switch (action.type) {
    case MIN_NUMBER_CHANGED:
      return {
        ...state,
        min: action.payload,
      };
    case MAX_NUMBER_CHANGED:
      return {
        ...state,
        max: action.payload,
      };
    default:
      return state;
  }
}
