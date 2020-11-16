const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3003;
const cors = require("./cors");

app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));

module.exports = app;
