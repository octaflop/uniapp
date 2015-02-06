'use strict';

/**
 * @ngdoc function
 * @name uniappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uniappApp
 */
angular.module('uniappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
