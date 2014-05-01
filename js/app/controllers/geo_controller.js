app.controller("GeoController", function($rootScope, geolocation) {
    geolocation.getLocation().then(function(data) {
            
           $rootScope.coords = {
                lat: data.coords.latitude,
                long: data.coords.longitude
           };
    });
});