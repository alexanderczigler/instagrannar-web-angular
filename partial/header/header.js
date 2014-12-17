angular.module('ingr-web').controller('HeaderCtrl', function ($scope, environment) {
  'use strict';
  $scope.url = environment.url();
});