'use strict';

/**
 * @ngdoc service
 * @name angularLeafletExampleApp.SearchElasticService
 * @description
 * # SearchElasticService
 * Service in the angularLeafletExampleApp.
 */
angular.module('angularLeafletExampleApp')
  .service('SearchElasticService', function () {

    var factory = {};

    factory.search = function (indexName, fieldName, searchQuery, filterField, filterValue) {

      // Prepare prefix query
      var prefix = {};
      prefix[fieldName] = searchQuery;
      prefix = { prefix: prefix };
      if (searchQuery === '') {
        prefix = { match_all: {} };
      }

      // Prepare filter query
      var filter = {};
      filter[filterField] = filterValue;
      var esQuery = { 'from': 0, 'size': 20,
        query: {
          filtered: {
            query: prefix,
            filter: { and: [{ term: filter }] }
          }
        }
      };

      console.dir(esQuery);


      return elasticClient.search({
        index: indexName,
        type: indexName + '_type',
        body: esQuery
      });
    };

    return factory;
  });
