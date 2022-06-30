/** Configs */
require("./config/dotenv.config");  // setting the dotenv goes here
require("./config/spotify.config"); // setting the spotify-api goes here

const express = require("express");
const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));



const routes = require("./config/routes.config"); // setting the routes goes here
app.use("/", routes); // setting the routes goes also here

require("./config/hbs.config");     // setting the hbs goes here
app.use(express.urlencoded({ extended: false })); // setting the routes goes also here


// Our routes go here:
// TODO: require router and use it

app.listen(3000, () =>
  console.log("My Spotify project running on port 3000 🎧 🥁 🎸 🔊")
);
