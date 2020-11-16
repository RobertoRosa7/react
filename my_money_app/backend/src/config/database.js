const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// Mongoose 4.11.0
// module.exports = mongoose.connect("mongodb://localhost/mymoney", {
//   useNewUrlParser: true,
// });

// Mongoose 4.13.19
module.exports = mongoose.connect("mongodb://localhost/mymoney", {
  useMongoClient: true,
});

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
mongoose.Error.messages.Number.min =
  "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.max =
  "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'.";
mongoose.Error.messages.String.enum =
  "'{VALUE}' não é válido para o atributo '{PATH}'.";
