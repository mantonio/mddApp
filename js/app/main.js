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

app.filter('toArray', function () {
    'use strict';
 
    return function (obj) {
        if (!(obj instanceof Object)) {
            return obj;
        }
 
        return Object.keys(obj).filter(function(key){if(key.charAt(0) !== "$") {return key;}}).map(function (key) {
            return Object.defineProperty(obj[key], '$key', {__proto__: null, value: key});
        });
    };
});
