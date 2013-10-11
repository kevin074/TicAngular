'use strict';

angular.module('newticApp', ["firebase"])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'TicTacCtrl'
      })
      .when('/directive', {
        templateUrl: 'views/directive.html',
        controller: 'DirectiveCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
