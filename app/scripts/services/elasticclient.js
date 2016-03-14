'use strict';

/**
 * @ngdoc service
 * @name angularLeafletExampleApp.ElasticClient
 * @description
 * # ElasticClient
 * Service in the angularLeafletExampleApp.
 */
angular.module('angularLeafletExampleApp')
  .service('ElasticClient', function (ConfigService, esFactory) {
    // currently I completely do not understand why I haven't to call 'esFactory.factory', as this is the defined
    // method on 'esFactory' in elasticsearch.angular.js which returns an instance of 'Client', but maybe somebody will
    // explain that fact.
    // this will actually create a 'Client'-Instance which you can configure as you wish.
    return esFactory({
      host: ConfigService.elasticURL,
      sniffOnStart: true,
      sniffInterval: 300000
    });
  });
