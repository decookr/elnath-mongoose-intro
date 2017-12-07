var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create a new Schema for game
//this will enforce our object properties
var gameSchema = new Schema({
    name: { type: String, required: true, unique: true },
    duration: { type: Number },
    numberOfPlayers: { type: Number }
});

module.exports = mongoose.model('Game', gameSchema);