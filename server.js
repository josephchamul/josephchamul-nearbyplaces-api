const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
let data = require("./data");
const db = require("./db");
let places = require("./places");
const app = express();
const port = process.env.PORT || 3002;

//hello
//middlewares
app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("Image Quiz API listening at port " + port);
});

app.get("/", (request, response) => {
  response.send("Welcome to Image Quiz API");
});

app.get("/places", (request, response) => {
  let metadata = places.places.map((x) => {
    return { type: x.type, places: x.places };
  });
  response.json(metadata);
});

app.get("/places/:type", (request, response) => {
  let type = request.params.type;
  let found = places.places.find((x) => x.type == type);
  if (found) {
    response.json(found.places);
  } else {
    response.status(404).json({ error: `places ${type} does not exist` });
  }
});

app.post("/score", (request, response) => {
  let username = request.body.username;
  let quizid = request.body.quizid;
  let score = request.body.score;
  data.scores.push({ score: score, quizid: quizid, username: username });
  response.json({ messsage: "The score was added successfully" });
});
