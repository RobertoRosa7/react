const INITIAL_STATE = {
  description: "Ler livro",
  list: [
    {
      _id: 1,
      description: "Pagar pensão",
      done: true,
    },
    {
      _id: 2,
      description: "Pagar fatura do cartão nubank",
      done: false,
    },
    {
      _id: 3,
      description: "Pagar curso de inglês",
      done: false,
    },
  ],
};

export default function TodoReducers(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case "DESCRIPTION_CHANGED":
      return {
        ...state,
        description: actions.payload,
      };
    default:
      return state;
  }
}