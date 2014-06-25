'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('jee7angularjsApp'));

  var MainCtrl, Customers,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    Customers=$injector.get('Customers');
    
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
                $Customers: Customers
    });
  }));

  it('should have 2 items', function () {
            
            
        });
});
