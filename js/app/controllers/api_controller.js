app.controller("ApiController", function($scope, $http) {
    $scope.googleMapsKey = "AIzaSyB0w2_dnlKE13DikhEpEO4MBUb7-ZtGFn4";

    $scope.map = {
        center: {
            latitude: 28.597161,
            longitude: -81.301508
        },
        zoom: 16
    };

});
