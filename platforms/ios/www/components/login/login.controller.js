(function() {
    'use strict';

angular
    .module('starter.controllers', [])
    .controller('LoginCtrl', LoginCtrl);

function LoginCtrl($scope, $rootScope, $ionicPopup, $cordovaFacebook, $ionicLoading, $state) { 
    
    $scope.barClass = 'bar-assertive';
    $scope.buttonClass = 'button-assertive';

    $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
      console.log(data.slider.activeIndex);

      switch (data.slider.activeIndex) {
        case 0:
            $scope.barClass = 'bar-assertive';
            $scope.buttonClass = 'button-assertive';
            break;
        case 1:
            $scope.barClass = 'bar-balanced';
            $scope.buttonClass = 'button-balanced';
            break;
        case 2:
                $scope.barClass = 'bar-positive';
                $scope.buttonClass = 'button-positive';
                break;
        default:
            break;
    }

    console.log($scope.barClass);
    $scope.$apply();
    });

    $scope.logout = function() {
        window.localStorage.setItem('user', null);
        $state.go('app.login');
    }

    $scope.login = function(){
        var appID = 1548396662121549;
        var version = "v2.5";
        $cordovaFacebook.login(["public_profile", "email"]).then(function(response) {
        
            $ionicLoading.show();
            user = {facebook_id : response.authResponse.userID};
            console.log(JSON.stringify(user));

            $cordovaFacebook.api("/" + response.authResponse.userID + "?fields=id,email,first_name,last_name", ["public_profile", "email"]).then(function(success) {
                $rootScope.user = success;
                $rootScope.loggedin = true;
                $ionicLoading.hide();
                $state.go('app.playlists');
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

})();
