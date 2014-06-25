'use strict';

/**
 * @ngdoc function
 * @name jee7angularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jee7angularjsApp
 */
angular.module('jee7angularjsApp')
  .controller('MainCtrl', function ($scope, Customers) {
      
      
      
      $scope.retrieve = function() {
    $scope.allcustomers =Customers.query();
    $scope.view = true;
  };
  
  $scope.clear = function() {
    $scope.view = false;
  };
    
  });
