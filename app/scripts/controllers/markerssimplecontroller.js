'use strict';

/**
 * @ngdoc function
 * @name angularLeafletExampleApp.controller:MarkerssimplecontrollerCtrl
 * @description
 * # MarkerssimplecontrollerCtrl
 * Controller of the angularLeafletExampleApp
 */
angular.module('angularLeafletExampleApp')
  .controller('MarkerssimplecontrollerCtrl', ['$scope',  function($scope) {

    angular.extend($scope, {
         london: {
             lat: 51.505,
             lng: -0.09,
             zoom: 8
         },
         markers: {}
     });

     $scope.addMarkers = function() {
         angular.extend($scope, {
             markers: {
                 m1: {
                     lat: 51.505,
                     lng: -0.09,
                     message: "I'm a static marker",
                 },
                 m2: {
                     lat: 51,
                     lng: 0,
                     focus: true,
                     message: "Hey, drag me if you want",
                     draggable: true
                 }
             }
         });
     };

     $scope.removeMarkers = function() {
         $scope.markers = {};
     }

     $scope.addMarkers();

}]);
