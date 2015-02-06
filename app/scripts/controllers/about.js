'use strict';

/**
 * @ngdoc function
 * @name uniappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the uniappApp
 */
angular.module('uniappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
