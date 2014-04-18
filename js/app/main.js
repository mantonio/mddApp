var app = angular.module('mddFSApp', ['ngRoute', 'directive.g+signin']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/list_view.html',
            controller: 'ApiController'
        })
        .when('/addFood', {
            templateUrl: 'views/addFood_view.html',
            controller: 'AddFoodController'
        });
});
