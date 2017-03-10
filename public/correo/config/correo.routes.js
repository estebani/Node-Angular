// Invocar modo JavaScript 'strict'
'use strict';
angular.module('correo').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/olvidoclave', {
      templateUrl: '/correo/views/correo.view.html'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);