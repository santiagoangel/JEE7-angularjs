'use strict';

/**
 * @ngdoc overview
 * @name jee7angularjsApp
 * @description
 * # jee7angularjsApp
 *
 * Main module of the application.
 */
angular
  .module('jee7angularjsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
