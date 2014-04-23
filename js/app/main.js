var app = angular.module('mddFSApp', ['ngRoute', 'directive.g+signin', 'google-maps']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/map_view.html',
            controller: 'MapController'
        })
        .when('/addFood', {
            templateUrl: 'views/addFood_view.html',
            controller: 'AddFoodController'
        })
        .when('/discounts', {
            templateUrl: 'views/discounts_view.html',
            controller: 'MapController'
        });
});
