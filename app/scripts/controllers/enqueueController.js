'use strict';

/* creating enqueueController for the app.
   Injecting $scope,
   Injecting aircraft and enqueueAircraft factories. 
   Injected the aircraft factory to get the aircraft object which contain the size and type and time properties
   Injected the enqueueAircraft factory to get the queueArray which contains all the enqueud aircrafts
*/
angular.module('acInterviewProjectApp').controller('enqueueController', ['$scope', 'aircraft', 'enqueueAircraft', 'dequeueAircraft', function ($scope, aircraft, enqueueAircraft, dequeueAircraft) {  

    //Intiliazing the aircraft object to scope variable to get Type and size of aircraft.
    $scope.aircraft = aircraft;

    //Intiliazing the enqueueAircraft object to scope variable to get the queueArray.
    $scope.enqueueAircraft = enqueueAircraft;
    $scope.dequeueAircraft = dequeueAircraft;
    $scope.selectedAcType = '';
    $scope.selectedAcSize = '';
 }]);