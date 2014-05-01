/************************************************
*
* File - main.js
* Author - Matt Antonio
* Project - hungR
* Location - js/app/main.js
* Date - 04/15/14
*
************************************************/

var app = angular.module('mddFSApp', ['ngRoute', 'directive.g+signin', 'google-maps', 'firebase', 'geolocation','ngStorage']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/map_view.html',
            controller: 'MapController'
        })
        .when('/add-restaurant', {
            templateUrl: 'views/addRestaurant_view.html',
            controller: 'RestaurantController'
        })
        .when('/all-restaurants', {
            templateUrl: 'views/list_view.html',
            controller: 'RestaurantController'
        });
});
