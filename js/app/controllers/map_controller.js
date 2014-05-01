/************************************************
 *
 * File - api_controller.js
 * Author - Matt Antonio
 * Project - hungR
 * Location - js/app/controllers/map_controller.js
 * Date - 04/15/14
 *
 ************************************************/

app.controller("MapController", function($rootScope, $scope, $firebase,$filter) {
    var googleMapsKey = "AIzaSyB0w2_dnlKE13DikhEpEO4MBUb7-ZtGFn4";

    //Connect to Firebase so we can get coords for each restaurant
    var db = new Firebase("https://mddapp.firebaseio.com/");
    var markers = $firebase(db);
    $scope.markers =[];
    markers.$on("loaded", function() {
     $scope.markers = $filter('toArray')(markers);
            console.log('markers',$scope.markers);
    });
    console.log($scope.restaurants);

    $scope.map = {
        center: {
            latitude: 28.597161,
            longitude: -81.301508
        },
        zoom: 17
    };

    var getCoords = function(latLng) {
        for(var i = 0; i < $scope.restaurants.length; i++) {
            $scope.markers = [{
                coords: {
                    latitude: $scope.restaurants.lat,
                    longitude: $scope.restaurants.lng
                }
            }]
        }
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
