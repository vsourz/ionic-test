angular
    .module('starter.controllers', [])
    .controller('MenuCtrl', MenuCtrl);

function MenuCtrl($scope, $rootScope, $state) {
    $scope.user = $rootScope.user;
}