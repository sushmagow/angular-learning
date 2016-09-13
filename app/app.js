require('angular');

var MainController = require('./controller/MainController');

var app = angular.module('app', []);

app.controller('MainController', ['$scope', MainController]);