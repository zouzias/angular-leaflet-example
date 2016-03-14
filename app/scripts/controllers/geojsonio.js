'use strict';

/**
 * @ngdoc function
 * @name angularLeafletExampleApp.controller:GeojsonioCtrl
 * @description
 * # GeojsonioCtrl
 * Controller of the angularLeafletExampleApp
 */
angular.module('angularLeafletExampleApp')
  .controller('GeojsonioCtrl', [ '$scope', '$http', function($scope, $http) {
           angular.extend($scope, {
                japan: {
                    lat: 47.51,
                    lng: 6,
                    zoom: 4
                },
                defaults: {
                    scrollWheelZoom: false
                }
            });

            // Get the countries geojson data from a JSON
            $http.get("json/JPN.geo.json").success(function(data, status) {
                angular.extend($scope, {
                    geojson: {
                        data: data,
                        style: {
                            fillColor: "red",
                            weight: 10,
                            opacity: 1,
                            color: 'white',
                            dashArray: '3',
                            fillOpacity: 0.7
                        }
                    }
                });
            });
          } ]);
