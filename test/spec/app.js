'use strict';

describe('Application: Main Script :: Public API ::', function () {

  // load the controller's module
  beforeEach(module('acInterviewProjectApp'));

  it('should should define boot() on angular', function () {
    expect(angular.boot).not.toBe(undefined);
  });
});