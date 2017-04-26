starter.controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, $rootScope, $state,$ionicSideMenuDelegate) {
      /**
      * close side menu in login screen
      */
    $ionicSideMenuDelegate.canDragContent(true);
    /**
    /**
     * after facebook sucess login if user not found than redirect to login screen
     */
    if (Object.keys($rootScope.user).length === 0) {
        $state.go('app.login');
        return;
    }

};