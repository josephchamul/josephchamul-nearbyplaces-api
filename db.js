"use strict";

require("dotenv").config();
const { Pool } = require("pg");

//console.log(process.env.POSTGRES_USER);
const postgreConnectionString = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`;

console.log(postgreConnectionString);

const postgrePool = new Pool({
  connectionString: process.env.DATABASE_URL
    ? process.env.DATABASE_URL
    : postgreConnectionString,
  ssl: { rejectUnauthorized: false },
});

function getPlaces() {
  postgrePool.connect();
  return postgrePool
    .query("select * from mynearbyplaces.places")
    .then((result) => {
      console.log(result);
      if (result.rows) {
        return result.rows;
      } else {
        throw Error("places could not be retrieved from the database.");
      }
    });
}

module.exports = { getPlaces };
