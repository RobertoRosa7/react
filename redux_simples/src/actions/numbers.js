// Action Creator
import { MAX_NUMBER_CHANGED, MIN_NUMBER_CHANGED } from "./actions-types";

export function changeNumMin(n) {
  return {
    type: MIN_NUMBER_CHANGED,
    payload: n,
  };
}

export function changeNumMax(n) {
  return {
    type: MAX_NUMBER_CHANGED,
    payload: n,
  };
}
