var app = angular.module('mddFSApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'index.html',
            controller: 'ListController'
        })
        .when('/index', {
            templateUrl: 'views/.html',
            controller: 'ListController'
        })
        .when('/detail/:itemId/:type', {
            templateUrl: 'views/.html',
            controller: 'DetailController'
        })
        .when('/about', {
            templateUrl: 'views/about_view.html',
            controller: 'ListController'
        })
        .when('/portfolio', {
            templateUrl: 'views/list_view.html',
            controller: 'ListController'
        })
        .when('/contact', {
            templateUrl: 'views/contact_view.html'
        })
        .when('/contact.php', {
            templateUrl: 'views/contact.php'
        });
});
