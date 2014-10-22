angular.module('ingr-web').controller('MainCtrl', function ($scope, $rootScope) {
  'use strict';

  $scope.selectedInstagram = {};
  $scope.displayGrid = true;

  $rootScope.$watch('selectedInstagram', function(si) {
    if (!si){
      return;
    }
  	if (si.link) {
			$scope.displayGrid = false;
			$scope.selectedInstagram = $rootScope.selectedInstagram;
      return;
  	}
    $scope.displayGrid = true;
  });

});