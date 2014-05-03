/************************************************
 *
 * File - api_controller.js
 * Author - Matt Antonio
 * Project - hungR
 * Location - js/app/controllers/map_controller.js
 * Date - 04/15/14
 *
 ************************************************/

app.controller("MapController", function($rootScope, $scope, $firebase, $filter, geolocation) {
    var googleMapsKey = "AIzaSyB0w2_dnlKE13DikhEpEO4MBUb7-ZtGFn4";

    //Connect to Firebase so we can get coords for each restaurant
    var db = new Firebase("https://mddapp.firebaseio.com/");
    var markers = $firebase(db);

    //Empty array for map markers
    $scope.markers = [];

    //Build the map and center on Full Sail
    $scope.map = {
        center: {
            latitude: 28.597161,
            longitude: -81.301508
        },
        zoom: 17
    };

    //Set the main Marker position to Full Sail
    $scope.centerMarker = {
        coords: {
            latitude: 28.597161,
            longitude: -81.301508
        }
    };

    //Get the user's current position and display it on the map
    $scope.getPosition = function() {
        geolocation.getLocation().then(function(data) {

            $scope.map.center = $scope.centerMarker.coords = {
                latitude: data.coords.latitude,
                longitude: data.coords.longitude
            };
        });
    };

    //Display all the markers on view load
    markers.$on("loaded", function() {
        //Convert objects to arrays
        $scope.markers = $filter('toArray')(markers);
        $scope.window = {
            isIconVisibleOnClick: true,
            closeclick: true,
            show: true
        }

    });

});
