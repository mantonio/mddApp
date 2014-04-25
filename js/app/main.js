var app = angular.module('mddFSApp', ['ngRoute', 'directive.g+signin', 'google-maps', 'firebase']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/map_view.html',
            controller: 'ApiController'
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
