'use strict';

angular.module('newticApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'TicTacCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
