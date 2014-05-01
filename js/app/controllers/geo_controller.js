/************************************************
 *
 * File - geo_controller.js
 * Author - Matt Antonio
 * Project - hungR
 * Location - js/app/controllers/geo_controller.js
 * Date - 04/15/14
 *
 ************************************************/

app.controller("GeoController", function($rootScope, geolocation) {
    geolocation.getLocation().then(function(data) {
            
           $rootScope.coords = {
                lat: data.coords.latitude,
                long: data.coords.longitude
           };
    });
});