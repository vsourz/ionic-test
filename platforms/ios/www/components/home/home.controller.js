(function() {
    'use strict';

angular
    .module('starter.controllers', [])
    .controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, $rootScope, $state) {
    if(Object.keys($rootScope.user).length === 0)
    {
        $state.go('app.login');
        return;
    }
}

})();