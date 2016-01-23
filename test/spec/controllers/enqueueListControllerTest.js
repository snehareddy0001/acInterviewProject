'use strict';

describe('Controller: enqueueListController', function () {

  // load the controller's module
  beforeEach(module('acInterviewProjectApp'));

  var enqueueListController,
      enqueueAircraft,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _enqueueAircraft_) {
    enqueueAircraft = _enqueueAircraft_;

    scope = $rootScope.$new();
    enqueueListController = $controller('enqueueListController', {
      $scope: scope,
    });
  }));

  it('should exist', function () {
    expect(enqueueListController).not.toBe(undefined);
  });

  it('should define enqueueAircraft', function () {
    expect(scope.queueArray).not.toBe(undefined);
    expect(scope.queueArray).toBe(enqueueAircraft.queueArray);
  });
  
});
