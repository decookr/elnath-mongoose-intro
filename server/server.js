var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 5000;

var mongooseConnection = require('./modules/mongoose-connection');
var game = require('./routes/game');

var app = express();

//MIDDLEWARE
app.use(bodyParser.json());//needed for Angular
app.use(express.static('server/public'));
mongooseConnection.connect();//module to spin up mongoose


//EXPRESS ROUTES
app.use('/game', game);

//START SERVER
app.listen(port, function(){
    console.log('listening on port', port);  
});