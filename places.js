let r1 = {
  name: "McDonald's",
  rate: 3,
  location: "Tucson, AZ",
  description: "Burger Fast Food Restaurant",
  review: ["they give you your food very fast", "the food is ok"],
  type: "restaurants",
};

let r2 = {
  name: "Taco Bell",
  rate: 3,
  location: "Tucson, AZ",
  description: "Taco Fast Food Restaurant",
  review: ["the best food for college students on a budge"],
  type: "restaurants",
};

let s1 = {
  name: "Tucson Mall",
  rate: 3.5,
  location: "Tucson, AZ",
  description: "The best place to shop",
  review: ["they have a lot of cool store to shop at"],
  type: "shops",
};

let s2 = {
  name: "Tucson Park Place Mall",
  rate: 3,
  location: "Tucson, AZ",
  description: "The best place to shop",
  review: ["they have all the shops you will ever need"],
  type: "shops",
};

let m1 = {
  name: "Sooter",
  rate: 4,
  location: "Tucson, AZ",
  description: "Locally owned Vehicle Repair Shop",
  review: ["the best service you will ever get at a repair shop"],
  type: "mechanic",
};

let m2 = {
  name: "Jiffy Lube",
  rate: 3,
  location: "Tucson, AZ",
  description: "Quick Car Maintence Shop",
  review: ["the are the fastest at changing my oil"],
  type: "mechanic",
};

let g1 = {
  name: "Campus Recreation",
  rate: 4,
  location: "Tucson, AZ",
  description: "University of Arizona Gym",
  review: ["this gym has the best equipment"],
  type: "gym",
};

let g2 = {
  name: "Planet Fitness",
  rate: 2.5,
  location: "Tucson, AZ",
  description: "The Best Priced Gym Membership",
  review: ["this best gym if its your first time working out"],
  type: "gym",
};

let restaurant = {
  type: "restaurants",
  places: [r1, r2],
};

let mechanic = {
  type: "mechanic",
  places: [m1, m2],
};

let shops = {
  type: "shops",
  places: [s1, s2],
};

let gym = {
  type: "gym",
  places: [g1, g2],
};

let places = [restaurant, mechanic, shops, gym];
module.exports.places = places;
