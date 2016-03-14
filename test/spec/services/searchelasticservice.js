'use strict';

describe('Service: SearchElasticService', function () {

  // load the service's module
  beforeEach(module('angularLeafletExampleApp'));

  // instantiate service
  var SearchElasticService;
  beforeEach(inject(function (_SearchElasticService_) {
    SearchElasticService = _SearchElasticService_;
  }));

  it('should do something', function () {
    expect(!!SearchElasticService).toBe(true);
  });

});
