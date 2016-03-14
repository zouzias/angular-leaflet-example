'use strict';

describe('Service: ElasticClient', function () {

  // load the service's module
  beforeEach(module('angularLeafletExampleApp'));

  // instantiate service
  var ElasticClient;
  beforeEach(inject(function (_ElasticClient_) {
    ElasticClient = _ElasticClient_;
  }));

  it('should do something', function () {
    expect(!!ElasticClient).toBe(true);
  });

});
