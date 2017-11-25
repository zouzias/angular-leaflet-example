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
  .config(function ($routeProvider, $locationProvider) {

    // See https://stackoverflow.com/questions/24814472/angularjs-converting-my-ng-href-url-slash-into-2f
    $locationProvider.hashPrefix('');

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
      .when('/map', {
        templateUrl: 'views/geojsonview.html',
        controller: 'MixedgeojsoneventscontrollerCtrl',
        controllerAs: 'mapcontroller'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/geojsonio', {
        templateUrl: 'views/geojsonio.html',
        controller: 'GeojsonioCtrl',
        controllerAs: 'geojsonio'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
