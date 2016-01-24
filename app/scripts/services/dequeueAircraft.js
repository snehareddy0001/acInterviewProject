'use strict';

// created dequeueAircraft factory for the app.
angular.module('acInterviewProjectApp').factory('dequeueAircraft', ['enqueueAircraft', function dequeueAircraft(enqueueAircraft) {
    
    /* dequeueAircraft.dequeue function is called when user clicks on dequeue button.
       it removes the first element from the array
       and gives an alert about which aircraft was dequeud.
    */
     dequeueAircraft.dequeue = function () {
         if (typeof enqueueAircraft.queueArray !== 'undefined' && enqueueAircraft.queueArray.length > 0) {
            var aircraft = enqueueAircraft.queueArray.shift();
            if(aircraft.Type === 'Passenger') {
                enqueueAircraft.passengersArray.shift();
            }
            else if(aircraft.Type === 'Cargo') {
                enqueueAircraft.cargosArray.shift();
            }
            window.alert('Dequeued Aircraft ' + aircraft.Type + ' ' + aircraft.Size + ', which was enqueued on ' + aircraft.Time);
        }
        else {
            window.alert('No more Aircrafts to dequeue');
        }
     
     };

     //returns the dequeueAircraft object when injected by other service.
     return dequeueAircraft;
}]);