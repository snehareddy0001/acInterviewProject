'use strict';

// creating a module and injecting ui.router
angular.module('acInterviewProjectApp', ['ui.router'])
.config(['$stateProvider','$locationProvider','$urlRouterProvider',
  function ( $stateProvider, $locationProvider, $urlRouterProvider) {
     
      $stateProvider
      // when the url is /enqueue takes to the specified html page.
             .state('views', {
                 url: '/enqueue',
                 templateUrl: 'views/enqueue.html',
                 controller: 'enqueueController'
             }).state('enqueueList', {
                 url: '/enqueueList',
                 templateUrl: 'views/enqueueList.html',
                 controller: 'enqueueListController',
                 parent: 'views'
             });

      //default route
      $urlRouterProvider.otherwise('/enqueue/enqueueList');
  }]);

// function to boot the app when boot button is clicked
(function (ng) {
    ng.boot = function () {
        ng.element(document).ready(function () {
            ng.bootstrap(document, ['acInterviewProjectApp']);
        });
    };
}(angular));