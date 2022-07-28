// require("dotenv").config();
const express = require("express");
const cors = require("cors");

const server = express();
const PORT = 3000;

server.use(cors());
server.use(express.json());

server.get("/", (request, response) => {
  return response.json({
    message: "Success, Hello World Heroku ;D",
  });
});

server.listen(PORT, () => console.log("On Fire - Hello Word Heroku :D"));
