var express = require('express');
var router = express.Router();
var Game = require('../models/game.schema');

router.get('/', function (req, res) {
    // a get request for all games
    Game.find({}, function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery){
            console.log('error with game find', errorMakingDatabaseQuery);
            res.sendStatus(500);   
        }else{
            res.send(data);
        }
    })
});



module.exports = router; 