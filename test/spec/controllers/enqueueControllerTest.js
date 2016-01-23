'use strict';

describe('Controller: enqueueController', function () {

  // load the controller's module
  beforeEach(module('acInterviewProjectApp'));

  var enqueueController,
      enqueueAircraft,
      dequeueAircraft,
      aircraft,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _aircraft_, _enqueueAircraft_, _dequeueAircraft_) {
    aircraft = _aircraft_;
    enqueueAircraft = _enqueueAircraft_;
    dequeueAircraft = _dequeueAircraft_;
    scope = $rootScope.$new();
    enqueueController = $controller('enqueueController', {
      $scope: scope,
    });
  }));

  it('should exist', function () {
    expect(enqueueController).not.toBe(undefined);
  });

  it('should define aircraft, enqueueAircraft and dequeueAircraft', function () {
    expect(scope.aircraft).not.toBe(undefined);
    expect(scope.enqueueAircraft).not.toBe(undefined);
    expect(scope.dequeueAircraft).not.toBe(undefined);
    expect(scope.aircraft).toBe(aircraft);
    expect(scope.enqueueAircraft).toBe(enqueueAircraft);
    expect(scope.dequeueAircraft).toBe(dequeueAircraft);
  });
  
});
