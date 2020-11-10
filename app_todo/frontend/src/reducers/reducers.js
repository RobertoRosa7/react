import { combineReducers } from "redux";

const rootReducers = combineReducers({
  todo: () => ({
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
  }),
});

export default rootReducers