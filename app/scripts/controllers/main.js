'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('MainCtrl', function ($scope) {

    $scope.persons = [{fullName: 'Sam'},{fullName: 'Robert'},{fullName: 'Mark'},{fullName: 'Peter'}]

  });
