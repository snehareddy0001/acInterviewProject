/*function initialization for enqueueController 
passing the scope, aircraft and enqueueAircraft objects.
*/
var enqueueController = function ($scope, aircraft, enqueueAircraft) {  

    //Intiliazing the aircraft object to scope variable to get Type and size of aircraft.
    $scope.aircraft = aircraft;

    //Intiliazing the enqueueAircraft object to scope variable to get the queueArray.
    $scope.enqueueAircraft = enqueueAircraft;
    $scope.selectedAcType = '';
    $scope.selectedAcSize = '';
   
/* dequeue function to execute, when the user clicks on dequeue button.
   it removes the first element from the array
   and gives an alert about which aircraft was dequeud.
*/
    $scope.dequeue = function () {
        if (enqueueAircraft.queueArray != '') {
            var type = enqueueAircraft.queueArray[0].Type;
            var size = enqueueAircraft.queueArray[0].Size;
            var time = enqueueAircraft.queueArray[0].Time;
            enqueueAircraft.queueArray.shift();
            alert('Dequeued Aircraft ' + type + ' ' + size + ', which was enqueud on ' + time);
        }
        else
            alert('No more Aircrafts to dequeue');
    }
  
 }
// $scope.$on('$locationChangeStart', function( event ) {
//     var answer = confirm("Are you sure you want to leave this page?")
//     if (!answer) {
//         event.preventDefault();
//     }
// });

/* Injecting $scope,
   Injecting aircraft and enqueueAircraft factories. 
   Injected the aircraft factory to get the aircraft object which contain the size and type and time properties
   Injected the enqueueAircraft factory to get the queueArray which contains all the enqueud aircrafts
*/
enqueueController['$inject'] = ['$scope', 'aircraft', 'enqueueAircraft'];

// creating enqueueController for the app.
app.controller("enqueueController", enqueueController);