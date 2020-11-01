const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3003;

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.listen(PORT, () => console.log(`The server is run on: ${PORT}`));

module.exports = server