'use strict';

// created airCraft factory for the app.
angular.module('acInterviewProjectApp').factory('aircraft', function aircraft() {
   
    // created Type property for the aircraft object which contains Passenger and cargo
    aircraft.Type = ['Passenger', 'Cargo'];

    // created Size property for the  aircraft object which contains Small and large.
    aircraft.Size = ['Small', 'Large'];

    // created time property for the aircraft object.
    aircraft.Time = '';

    // returns the aircraft object when the factory has been injected.
    return aircraft;
});