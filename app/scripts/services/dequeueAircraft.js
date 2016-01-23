'use strict';

// function dequeueAircraft(enqueueAircraft) {

//     var dequeueAircraft = {};
    
//     /* dequeueAircraft.dequeue function is called when user clicks on dequeue button.
//        it removes the first element from the array
//        and gives an alert about which aircraft was dequeud.
//     */
//      dequeueAircraft.dequeue = function () {
//          if (enqueueAircraft.queueArray != '') {
//             var type = enqueueAircraft.queueArray[0].Type;
//             var size = enqueueAircraft.queueArray[0].Size;
//             var time = enqueueAircraft.queueArray[0].Time;
//             enqueueAircraft.queueArray.shift();
//             alert('Dequeued Aircraft ' + type + ' ' + size + ', which was enqueued on ' + time);
//         }
//         else
//             alert('No more Aircrafts to dequeue');
     
//      }
 
//      //returns the dequeueAircraft object when injected by other service.
//      return dequeueAircraft;
// }

// created dequeueAircraft factory for the app.
// dequeueAircraft['$inject'] = ['enqueueAircraft'];
angular.module('acInterviewProjectApp').factory('dequeueAircraft', ['enqueueAircraft', function dequeueAircraft(enqueueAircraft) {

    // var dequeueAircraft = {};
    
    /* dequeueAircraft.dequeue function is called when user clicks on dequeue button.
       it removes the first element from the array
       and gives an alert about which aircraft was dequeud.
    */
     dequeueAircraft.dequeue = function () {
         if (typeof enqueueAircraft.queueArray !== 'undefined' && enqueueAircraft.queueArray.length > 0) {
            var type = enqueueAircraft.queueArray[0].Type;
            var size = enqueueAircraft.queueArray[0].Size;
            var time = enqueueAircraft.queueArray[0].Time;
            enqueueAircraft.queueArray.shift();
            window.alert('Dequeued Aircraft ' + type + ' ' + size + ', which was enqueued on ' + time);
        }
        else {
            window.alert('No more Aircrafts to dequeue');
        }
     
     };

     //returns the dequeueAircraft object when injected by other service.
     return dequeueAircraft;
}]);