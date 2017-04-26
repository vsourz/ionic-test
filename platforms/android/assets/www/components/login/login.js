starter.controller('LoginCtrl', LoginCtrl);

function LoginCtrl($scope, $rootScope, $ionicPopup, $cordovaFacebook, $ionicLoading, $state, $ionicSideMenuDelegate) {
    /**
      * close side menu in login screen
      */
    $ionicSideMenuDelegate.canDragContent(false);
    /**
       * perform facebook login
       */
    $scope.login = function () {
        var appID = 1548396662121549;
        var version = "v2.5";
        var myState = $state;
        $cordovaFacebook.login(["public_profile", "email"]).then(function (response) {
            $ionicLoading.show();
            var user = { facebook_id: response.authResponse.userID };
            /**
           *  fetch  facebook user data
           */
            $cordovaFacebook.api("/" + response.authResponse.userID + "?fields=id,email,first_name,last_name", ["public_profile", "email"]).then(function (success) {
                $rootScope.user = success;
                $rootScope.loggedin = true;
                $ionicLoading.hide();
                /**
            * redirect to home page on suceess facebook login
            */
                myState.go("app.home");
            }, function (error) {
                $ionicLoading.hide();
                $ionicPopup.alert({
                    title: 'Error!',
                    template: 'An error occured while processing your request. Please try again later'
                });
            });
        });
    }
}
