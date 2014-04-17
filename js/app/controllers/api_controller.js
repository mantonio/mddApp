app.controller("GoogleApiController", function($scope, $http) {
    $scope.apiKey = "AIzaSyB0w2_dnlKE13DikhEpEO4MBUb7-ZtGFn4";

    function gMapsInit() {
        var mapOptions = {
            center: new google.maps.LatLang(28.597161,-81.301508),
            zoom: 8
        };

        var gMap = new google.maps.Map($("#map-canvas"), mapOptions);
    }
    google.maps.event.addDomListener(window, 'load', gMapsInit);

});