/************************************************
*
* @File - restaurant_controller.js
* @Author - Matt Antonio
* @Project - hungR
* @Location - js/app/controllers/restaurant_controller.js
* @Date - 04/15/14
*
************************************************/

app.controller("RestaurantController", function($scope, $firebase) {

    //Successful log in to Google 
    $scope.$on('event:google-plus-signin-success', function(event, authResult) {
        // User successfully authorized the G+ App!
        console.log('Signed in!');
        $("#restaurantSubmit").css("display", "block");
        $("#g-login").css("display", "none");
    });

    //Unsuccessful log in to Google
    $scope.$on('event:google-plus-signin-failure', function(event, authResult) {
        // User has not authorized the G+ App!
        console.log('Not signed into Google Plus.');
        $("#restaurantSubmit").css("display", "none");
    });

    //Connect to Firebase
    var db = new Firebase("https://mddapp.firebaseio.com/");
    $scope.restaurants = $firebase(db);

    //Add restaurant to current list
    //Check to see if all form fields have been filled out
    $scope.addRestaurant = function(e) {
        //Throw an error message if form is not complete
        if($scope.restaurantName == "" || $scope.address == "" || $scope.city == "" || $scope.zip == "" || $scope.discount == "") {
            alert("Please fill in all form fields");
            $("#submitFail").css("display", "block");
        //If form has been filled out add data to firebase and reset form
        }else { 
            $scope.restaurants.$add({restaurantName: $scope.restaurantName, address: $scope.address, city: $scope.city, state: $scope.state, zip: $scope.zip, discount: $scope.discount});
            $scope.restaurantName = "";
            $scope.address = "";
            $scope.city = "";
            $scope.state = $scope.state[0].value;
            $scope.zip = "";
            $scope.discount = "";
            $("#submitSuccess").css("display", "block");
        }
        
    }

});
