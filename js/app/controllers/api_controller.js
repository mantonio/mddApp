app.controller("ApiController", function($scope, $http) {
    $scope.googleMapsKey = "AIzaSyB0w2_dnlKE13DikhEpEO4MBUb7-ZtGFn4";

    var gMapsInit = function() {
        var defaultLatLng = new google.maps.LatLng(28.597161,-81.301508);
        var mapOptions = {
            center: defaultLatLng,
            zoom: 17
        };

        var gMap = new google.maps.Map(
            document.getElementById("map-canvas"),
            mapOptions
        );

        var mapMarker = new google.maps.Marker({
            position: defaultLatLng,
            map: gMap,
            title: "Full Sail University"
        });
    };
    google.maps.event.addDomListener(window, 'load', gMapsInit);

});