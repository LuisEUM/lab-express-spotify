const spotifyApi = require('../config/spotify.config');

module.exports.search = (req, res, next) => {
    spotifyApi
    .searchArtists(req.query.search)
    .then((data) => {
        res.render('artist-search-results', {artists:data.body.artists.items})
    })
    .catch((err) =>
        console.log("The error while searching artists occurred: ", err)
    );
};

module.exports.album = (req, res, next) => {
    spotifyApi.getArtistAlbums(req.params.id)
    .then((data)=>{
        res.render('albums', {albums:data.body.items})
    })
    .catch((err) =>
        console.log("The error while searching artists occurred: ", err)
    );
};


module.exports.songs = (req, res, next) => {
    spotifyApi.getAlbumTracks(req.params.id, { limit : 20, offset : 0 })
    .then(function(data) {
        console.log(data.body);
        res.render('songs', {songs:data.body.items})
    }, function(err) {
        console.log('Something went wrong!', err);
    });
};
