const INITIAL_STATE = {
  description: "",
  list: [],
};

export default function TodoReducers(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case "DESCRIPTION_CHANGED":
      return {
        ...state,
        description: actions.payload,
      };
    case "TODO_SEARCHED":
      return {
        ...state,
        list: actions.payload.data,
      };
    case "TODO_ADDED":
      return {
        ...state,
        description: "",
      };
    default:
      return state;
  }
}
