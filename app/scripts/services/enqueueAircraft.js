'use strict';

// created enqueueAircraft factory for the app.
angular.module('acInterviewProjectApp').factory('enqueueAircraft', [ function enqueueAircraft() {
    
    enqueueAircraft.passengersArray = [];
    enqueueAircraft.cargosArray = [];
    enqueueAircraft.queueArray = [];
    
    /* enqueueAircraft.enqueue function is called when user clicks on enqueue button.
       checks if type and size are not empty, if both are not empty
    */
     enqueueAircraft.enqueue = function (type, size) {
         if (type !== '' && size !== '') {
             if (type === 'Passenger') {
                 enqueueAirplane(type, size, enqueueAircraft.passengersArray);
             }
             if (type === 'Cargo') {
                 enqueueAirplane(type, size, enqueueAircraft.cargosArray);
             }
         }


        /* compares two elements in passenegersArray, if both are of same size it puts the earliest time element on top of the list
           else it puts the large size of passenger type on top of the list. 
        */
         enqueueAircraft.passengersArray.sort(function (a, b) {

             if (a.Size.toString() === b.Size.toString()) {
                 return b.Time.getTime() > a.Time.getTime() ? -1 : 1;
             } else {
                 return a.Size === 'Large' ? -1 : 1;
             }
         });

         /* compares two elements in cargosArray, if both are of same size it puts the earliest time element on top of the list
           else it puts the large size of cargo type on top of the list. 
        */
         enqueueAircraft.cargosArray.sort(function (a, b) {
             if (a.Size.toString() === b.Size.toString()) {
                 return b.Time.getTime() > a.Time.getTime() ? -1 : 1;
             } else {
                 return a.Size === 'Large' ? -1 : 1;
             }

         });


         enqueueAircraft.queueArray.splice(0,enqueueAircraft.queueArray.length);
         enqueueAircraft.queueArray.push.apply(enqueueAircraft.queueArray,enqueueAircraft.passengersArray);
         enqueueAircraft.queueArray.push.apply(enqueueAircraft.queueArray,enqueueAircraft.cargosArray);
     };

     //function to load aircrafts in an array.
     var enqueueAirplane = function (type, size, typeArray) {
         var enqueueAircraftList = {};
         enqueueAircraftList.Type = type;
         enqueueAircraftList.Size = size;
         enqueueAircraftList.Time = new Date();
         typeArray.push(enqueueAircraftList);

     };

     //returns the enqueueAircraft object when injected by other service.
     return enqueueAircraft;
}]);