/************************************************
*
* File - api_controller.js
* Author - Matt Antonio
* Project - hungR
* Location - js/app/controllers/map_controller.js
* Date - 04/15/14
*
************************************************/

app.controller("MapController", function($rootScope, $scope) {
    var googleMapsKey = "AIzaSyB0w2_dnlKE13DikhEpEO4MBUb7-ZtGFn4";

    $scope.map = {
        center: {
            latitude: 28.597161,
            longitude: -81.301508
        },
        zoom: 17
    };

    $scope.marker = {
        coords: {
            latitude: 28.597161,
            longitude: -81.301508
        },
        showWindow: true,
        title: "Full Sail University"
    };

});
