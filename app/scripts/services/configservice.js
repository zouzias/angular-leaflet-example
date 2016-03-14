'use strict';

/**
 * @ngdoc service
 * @name angularLeafletExampleApp.ConfigService
 * @description
 * # ConfigService
 * Service in the angularLeafletExampleApp.
 */
angular.module('angularLeafletExampleApp')
  .service('ConfigService', function () {
    return {
      index: 'locations',
      type: 'locations_type',
      elasticURL: 'http://localhost:9200/'
    };
  });
