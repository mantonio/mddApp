var app = angular.module('mddFSApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/list_view.html',
            controller: 'ApiController'
        });
});
