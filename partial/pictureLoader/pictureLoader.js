angular.module('ingr-web').controller('PictureLoaderCtrl', function ($scope, $rootScope, mapsHelper) {
  'use strict';

  $scope.place = $rootScope.place;

  $scope.load = function(zoom) {
    $rootScope.safeApply(function () {
      $scope.place.dst = mapsHelper.mapZoomToDistance(zoom);
      $rootScope.place.changed = true;
    });
  };

});