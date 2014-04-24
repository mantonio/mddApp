app.controller("AddFoodController", function($scope, $http) {
    $scope.errors = [];
    $scope.msgs = [];

    $scope.$on('event:google-plus-signin-success', function(event, authResult) {
        // User successfully authorized the G+ App!
        console.log('Signed in!');
        $("#addFood-btn").css("display", "block");
        $("#g-login").css("display", "none");
    });
    $scope.$on('event:google-plus-signin-failure', function(event, authResult) {
        // User has not authorized the G+ App!
        console.log('Not signed into Google Plus.');
        $("#addFood-btn").css("display", "none");
    });

    $scope.addFood = function() {
        $scope.errors.splice(0, $scope.errors.length); // remove all error messages
        $scope.msgs.splice(0, $scope.msgs.length);

        $http.post('db-connect.php', {
            'restaurant-name': $scope.restaurant-name,
            'address': $scope.address,
            'discount': $scope.discount
        }).success(function(data, status, headers, config) {
            if (data.msg != '') {
                $scope.msgs.push(data.msg);
            } else {
                $scope.errors.push(data.error);
            }
        }).error(function(data, status) { // called asynchronously if an error occurs
            // or server returns response with an error status.
            $scope.errors.push(status);
        });
    }//END addFood()

});
