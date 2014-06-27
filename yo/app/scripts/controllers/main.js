'use strict';

/**
 * @ngdoc function
 * @name jee7angularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jee7angularjsApp
 */
angular.module('jee7angularjsApp')
        .controller('MainCtrl', function($scope, Customers) {

            $scope.showerror = false;

            $scope.create = function() {
                $scope.loading = true;
                Customers.query(function(data) {
                    $scope.allcustomers = data;
                    $scope.view = true;
                    $scope.loading = false;
                    $scope.showerror = false;
                }, function(error) {
                    $scope.loading = false;
                    $scope.showerror = true;
                    $scope.errorMessage = error.statusText;
                });
            };

            $scope.read = function() {
                $scope.loading = true;
                Customers.query(function(data) {
                    $scope.allcustomers = data;
                    $scope.view = true;
                    $scope.loading = false;
                    $scope.showerror = false;                    
                }, function(error) {
                    $scope.loading = false;
                    $scope.showerror = true;
                    $scope.errorMessage = error.statusText;
                });

            };
            $scope.update = function() {
                $scope.loading = true;
                $scope.view = false;
                
                var time = Date.now || function() {
                    return +new Date();
                };


                
                //get customer and update
                var c1 = Customers.get({id: 1}, function() {
                    c1.name = 'Updated ' + time();
                    c1.$edit({id: 1});
                    for (var i = 0; i < $scope.allcustomers.length; i++) {
                        var currCust = $scope.allcustomers[i];
                        if (currCust.customerId === 1) {
                            currCust.name = c1.name;
                            break;
                        }
                    }
                    
                    
                    //$scope.allcustomers.push(c1);                    
                    $scope.loading = false;
                    $scope.showerror = false;
                }, function(error) {
                    $scope.loading = false;
                    $scope.showerror = true;
                    $scope.errorMessage = error.statusText;
                });
                
                
                
                
            };
            $scope.drop = function() {
                $scope.loading = true;
                Customers.query(function(data) {
                    $scope.allcustomers = data;
                    $scope.view = true;
                    $scope.loading = false;
                    $scope.showerror = false;
                }, function(error) {
                    $scope.loading = false;
                    $scope.showerror = true;
                    $scope.errorMessage = error.statusText;
                });

            };

            $scope.clear = function() {
                $scope.view = false;
            };
            
            $scope.myData = [{name: 'Moroni', age: 50},
                 {name: 'Tiancum', age: 43},
                 {name: 'Jacob', age: 27},
                 {name: 'Nephi', age: 29},
                 {name: 'Enos', age: 34}];
            
            $scope.gridOptions = {
                data: 'allcustomers',
                columnDefs: [
                    { field: 'customerId'},
                    { field: 'name', width: 180 },
                    { field: 'city'},
                    { field: 'state'}
                    
                ]
                
            };
            
            $scope.read();

        });




