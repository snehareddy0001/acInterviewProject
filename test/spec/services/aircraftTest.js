'use strict';

describe('Factories: Aircraft ::', function () {

  // load the service's module
  beforeEach(module('acInterviewProjectApp'));

  // instantiate service
  var aircraft;

  beforeEach(inject(function($injector) {
    aircraft = $injector.get('aircraft');
  }));

  it('should exist', function () {
    expect(aircraft).not.toBe(undefined);
  });

  it('should have aircraft type and size', function () {
    expect(aircraft.Type).toEqual(['Passenger', 'Cargo']);
    expect(aircraft.Size).toEqual(['Small', 'Large']);
  });

});
