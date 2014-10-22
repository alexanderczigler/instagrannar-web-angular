angular.module('ingr-web').controller('PhotoViewCtrl', function ($scope, $rootScope) {
  'use strict';

  $scope.instagram = {};

  $scope.t = function (time) {
    var day = moment.unix(time);
    var m = moment(day, 'YYYYMMDD').fromNow();
    return m;
  };

  $rootScope.$watch('selectedInstagram', function(si) {
    if (!si) {
      return;
    }
  	if (si.link) {
			$scope.instagram = $rootScope.selectedInstagram;
  	}
  });

});