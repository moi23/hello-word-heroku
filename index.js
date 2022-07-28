const express = require("express");
const server = express();

const port = process.env.PORT || 3000;

//server.use(cors());
server.get("/ping", (request, response) => {
  response.send("Olá, Hello Word Heroku :D");
});

server.listen(port, () => console.log("On Fire - Hello Word Heroku :D"));
