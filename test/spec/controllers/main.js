'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('slotsApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have some values', function () {
    expect(scope.slotsData.length).toBe(3);
  });
});
