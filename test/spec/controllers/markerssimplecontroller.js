'use strict';

describe('Controller: MarkerssimplecontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularLeafletExampleApp'));

  var MarkerssimplecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MarkerssimplecontrollerCtrl = $controller('MarkerssimplecontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MarkerssimplecontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
