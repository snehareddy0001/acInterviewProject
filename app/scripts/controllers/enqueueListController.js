'use strict';

/*function initialization for enqueueListController
passing the scope and enqueueAircraft objects.
*/
// var enqueueListController = function ($scope, enqueueAircraft) {

// 	// intializing the queueArray from enqueueAircraft factory.
//     $scope.queueArray = enqueueAircraft.queueArray;  
// }

// /* Injecting $scope and enqueueAircraft factory.
//    Injected the enqueueAircraft factory to get the queueArray which contains all the enqueud aircrafts
// */
// enqueueListController['$inject'] = ['$scope', 'enqueueAircraft'];

// creating enqueueListController for the app.
angular.module('acInterviewProjectApp').controller('enqueueListController', ['$scope', 'enqueueAircraft', function ($scope, enqueueAircraft) {

	// intializing the queueArray from enqueueAircraft factory.
    $scope.queueArray = enqueueAircraft.queueArray;  
}]);