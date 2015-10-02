'use strict';

describe('Controller: MixedgeojsoneventscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularLeafletExampleApp'));

  var MixedgeojsoneventscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MixedgeojsoneventscontrollerCtrl = $controller('MixedgeojsoneventscontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MixedgeojsoneventscontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
