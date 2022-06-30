const express = require('express')
const router = express.Router()
const misc = require("../controllers/misc.controller");

require("./spotify.config"); // setting the spotify-api goes here

const spotifyController = require('../controllers/spotify.controller')

router.get("/", misc.home);


module.exports = router

console.log('router')