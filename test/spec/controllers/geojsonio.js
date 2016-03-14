'use strict';

describe('Controller: GeojsonioCtrl', function () {

  // load the controller's module
  beforeEach(module('angularLeafletExampleApp'));

  var GeojsonioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeojsonioCtrl = $controller('GeojsonioCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GeojsonioCtrl.awesomeThings.length).toBe(3);
  });
});
