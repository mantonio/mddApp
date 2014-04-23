app.controller("AddFoodController", function($scope) {
    console.log('hello');

    $scope.$on('event:google-plus-signin-success', function(event, authResult) {
        // User successfully authorized the G+ App!
        console.log('Signed in!');
        $("#addFood-btn").show();
        $("#g-login").hide();
    });
    $scope.$on('event:google-plus-signin-failure', function(event, authResult) {
        // User has not authorized the G+ App!
        console.log('Not signed into Google Plus.');
        $("#addFood-btn").hide();
    });

});
