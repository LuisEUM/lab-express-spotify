const express = require('express')
const router = express.Router()
const misc = require("../controllers/misc.controller")

require("./spotify.config") // setting the spotify-api goes here
const spotifyController = require('../controllers/spotify.controller')

router.get("/", misc.home);
router.get('/artist-search', spotifyController.search)
router.get("/albums/:id", spotifyController.album);
router.get("/albums/:album/:id", spotifyController.songs);

module.exports = router

console.log('router')