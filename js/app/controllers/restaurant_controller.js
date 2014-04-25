app.controller("RestaurantController", function($scope, $firebase) {
    $scope.errors = [];
    $scope.msgs = [];

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
    $scope.addRestaurant = function(e) {
        if($scope.restaurantName == "" || $scope.address == "" || $scope.city == "" || $scope.zip == "" || $scope.discount == "") {
            alert("Please fill in all form fields");
            $("#submitFail").css("display", "block");
        }else {
            $scope.restaurants.$add({restaurantName: $scope.restaurantName, address: $scope.address, city: $scope.city, state: $scope.state, zip: $scope.zip, discount: $scope.discount});
            $scope.restaurantName = "";
            $scope.address = "";
            $scope.state = $scope.state[1];
            $scope.city = "";
            $scope.zip = "";
            $scope.discount = "";
            $("#submitSuccess").css("display", "block");
        }
        
    }

});
