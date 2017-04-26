/**
     * give all starter global variabe to inject all controllers
     * add controller in menu-content
     */

var starter = angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

  .run(function ($ionicPlatform, $rootScope) {
    $rootScope.user = {};
    $rootScope.loggedin = false;

    $ionicPlatform.ready(function () {
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
    /**
    * handle android hardware back button
    */
    $ionicPlatform.onHardwareBackButton(function () {
      navigator.app.exitApp();
    });
  })
  .config(function ($stateProvider, $urlRouterProvider, $cordovaFacebookProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'components/menu/menu.html'
      })
      .state('app.login', {
        url: '/login',
        views: {
          'menuContent': {
            templateUrl: 'components/login/login.html',
            controller: 'LoginCtrl'
          }
        }
      })
      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'components/home/home.html',
            controller: 'HomeCtrl'
          }
        }
      });
    /**
   * if user not select any state than redirect to login page
   */
    $urlRouterProvider.otherwise('/app/login');
  });
