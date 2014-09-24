angular.module('ingr-web').controller('PictureLoaderCtrl', function ($scope, $rootScope, mapsHelper, $timeout, localizedContent, zoom) {
  'use strict';

  $scope.localizedContent = localizedContent;
  $scope.place = $rootScope.place;
  $scope.buttonDisabled = false;

  $scope.load = function(zoomLevel) {
    $scope.buttonDisabled = true;
    $rootScope.safeApply(function () {
      $scope.place.dst = zoom.radius(zoomLevel);
      $rootScope.place.changed = true;
    });
  };

  $rootScope.$watch('place', function(place) {
    if (!$rootScope.place.reload) {
      $timeout(function() {
        $scope.buttonDisabled = false;
      }, 2000);
    }
  }, true);

});