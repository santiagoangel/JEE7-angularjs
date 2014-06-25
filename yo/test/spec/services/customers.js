'use strict';

describe('Service: Customers', function () {

  // load the service's module
  beforeEach(module('jee7angularjsApp'));
  
  

  // instantiate service
  var Customers;
  beforeEach(inject(function (_Customers_) {
    Customers = _Customers_;
  }));

  it('should do something', function () {
    expect(!!Customers).toBe(true);
  });
  

  
describe('Customers.query', function( ) {
    
    
   
    

    it('should fetch all customers', function() {
        var result = Customers.query();
        
        expect(result.length).toBe(0);
    });
});

});
