const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://35.178.91.217/:3003/"
};

app.use(cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Cpp." });
});

require('./routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3003;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. http://35.178.91.217/:${PORT}/`);  // Server Connnected
});





