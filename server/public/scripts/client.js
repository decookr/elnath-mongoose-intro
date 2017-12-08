var app = angular.module('GameApp', []);

app.controller('GameController', ['$http', function ($http) {
    console.log('GameController has been loaded');
    var self = this;
    self.games = [];  //empty array for food to go into

    self.getGames = function () {
        $http({
            method: 'GET',
            url: '/game',
        }).then(function (response) {
            console.log('response', response.data); ///response.data will just send back the array of objects, not all the extra info
            self.games = response.data;
        });
    };

    self.addNewGame = function (newGame) {
        $http({
            method: 'POST',
            url: '/game',
            data: newGame, "votes": 0
        }).then(function (response) {
            console.log('response', response);
            self.newGame = {}; //this clears our the input fields 
            self.getGames();
        });
    }

    self.getGames();

}]);
