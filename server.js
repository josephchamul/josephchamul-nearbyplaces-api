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

app.post("/addplace", (request, response) => {
  let name = request.body.name;
  let rate = request.body.rate;
  let location = request.body.location;
  let description = request.body.description;
  let review = request.body.review;
  let type = request.body.type;
  console.log(type);
  for (let i = 0; i < places.places.length; i++) {
    if (places.places[i].type == type) {
      places.places[i].places.push({
        name: name,
        rate: rate,
        location: location,
        description: description,
        review: review,
      });
    }
  }
  response.json({ messsage: "The score was added successfully" });
});

app.post("/delete", (request, response) => {
  let type = request.body.type;
  let biz = request.body.biz;
  console.log(type);
  for (let i = 0; i < places.places.length; i++) {
    if (places.places[i].type == type) {
      for (let x = 0; i < places.places[i].places.length; i++) {
        if (places.places[i].places[x].name == biz) {
          places.places[i].places.splice(x, 1);
        }
      }
    }
  }
  response.json({ messsage: "The score was added successfully" });
});
