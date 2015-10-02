'use strict';

/**
 * @ngdoc overview
 * @name angularLeafletExampleApp
 * @description
 * # angularLeafletExampleApp
 *
 * Main module of the application.
 */
angular
  .module('angularLeafletExampleApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'leaflet-directive'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/markers', {
        templateUrl: 'views/simplemarkersexample.html',
        controller: 'MarkerssimplecontrollerCtrl',
        controllerAs: 'markers'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
