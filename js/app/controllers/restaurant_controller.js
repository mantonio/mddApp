/************************************************
 *
 * File - restaurant_controller.js
 * Author - Matt Antonio
 * Project - hungR
 * Location - js/app/controllers/restaurant_controller.js
 * Date - 04/15/14
 *
 ************************************************/

app.controller("RestaurantController", function($rootScope, $scope, $firebase, Geocoder) {

    //Successful log in to Google 
    $scope.$on('event:google-plus-signin-success', function(event, authResult) {
        // User successfully authorized the G+ App!

        $scope.gLogin = true;
        console.log('Signed in!', $scope.gLogin);
        $scope.$apply();
    });

    //Unsuccessful log in to Google
    $scope.$on('event:google-plus-signin-failure', function(event, authResult) {
        // User has not authorized the G+ App!

        $scope.gLogin = false;
        console.log('Not signed into Google Plus.', $scope.gLogin);
        $scope.$apply();

    });

    //Connect to Firebase
    var db = new Firebase("https://mddapp.firebaseio.com/");
    $scope.restaurants = $firebase(db);

    //Add restaurant to current list
    //Check to see if all form fields have been filled out
    $scope.addRestaurant = function(e) {
        //Throw an error message if form is not complete
        if ($scope.restaurantName == "" || $scope.address == "" || $scope.city == "" || $scope.zip == "" || $scope.discount == "") {
            $scope.msgFail = true;
            $scope.alertMsg = "Please fill in all empty fields";
            //If form has been filled out add data to firebase and reset form
        } else {
            var address = $scope.street + ", " + $scope.city + ", " + $scope.state + " " + $scope.zip;
            //console.log(address);
            Geocoder.geocodeAddress(address).then(function(latLng) {
                //console.log(latLng);
                $scope.restaurants.$add({
                    restaurantName: $scope.restaurantName,
                    address: latLng.formattedAddress,
                    discount: $scope.discount,
                    lat: latLng.lat,
                    long: latLng.lng
                });
                //console.log(latLng.lat);

                //Reset form fields after submission
                $scope.restaurantName = "";
                $scope.street = "";
                $scope.city = "";
                $scope.state = "";
                $scope.zip = "";
                $scope.discount = "";
                $scope.msgSuccess = true;
                $scope.alertMsg = "Restaurant Information submitted successfully!";
            }, function(error) {
                console.log('error', error);
                $scope.msgFail = true;
                $scope.alertMsg = "Restaurant Information NOT submitted. Please try again";
            });
        }

    }

    $scope.disableForm = function(e) {
        if ($scope.restaurantName !== "" || $scope.address !== "" || $scope.city !== "" || $scope.zip !== "" || $scope.discount !== "") {
            $scope.msgFail = true;
            $scope.alertMsg = "This form is disabled during development.";
        }
    }

});

interpreted
