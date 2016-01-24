'use strict';

/* creating enqueueListController for the app.
   used inline annotation for injecting $scope and enqueueaircraft.
*/
angular.module('acInterviewProjectApp').controller('enqueueListController', ['$scope', 'enqueueAircraft', function ($scope, enqueueAircraft) {

	// intializing the queueArray from enqueueAircraft factory.
    $scope.queueArray = enqueueAircraft.queueArray;  
}]);