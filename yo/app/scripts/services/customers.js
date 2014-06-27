'use strict';

/**
 * @ngdoc service
 * @name yoApp.Customers
 * @description
 * # Customers
 * Service in the yoApp.
 */

/*
var customersService=angular.module('yoApp', ['ngResource']);
customersService.factory('Customers',function($resource){
    return $resource('/jee7angularjs/ws/customers/1/2',{},{
        query: {method:'GET',isArray:true}
    });
});
*/

angular.module('jee7angularjsApp').service('Customers', function Customers($resource){
    return $resource('/jee7angularjs/ws/customers/:id',{},{
        query: {method:'GET',isArray:true},
        get: {method:'GET',isArray:false},
        save: {method:'POST',headers: {
            'Content-Type': 'application/json'
        },isArray:false},
        edit: {method:'PUT',headers: {
            'Content-Type': 'application/json'
        },params: {id: '@id'},isArray:false}
    
    
    });
  });
