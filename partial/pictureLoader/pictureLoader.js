angular.module('ingr-web').controller('PictureLoaderCtrl', function ($scope, $rootScope, mapsHelper, $timeout, localizedContent) {
  'use strict';

  $scope.localizedContent = localizedContent;
  $scope.place = $rootScope.place;
  $scope.buttonDisabled = false;

  $scope.load = function(zoom) {
    $scope.brieflyDisableLoadButton();
    $rootScope.safeApply(function () {
      $scope.place.dst = mapsHelper.mapZoomToDistance(zoom);
      $rootScope.place.changed = true;
    });
  };

  $scope.brieflyDisableLoadButton = function() {
    $scope.buttonDisabled = true;
    $timeout(function() {
      $scope.buttonDisabled = false;
    }, 2000);
  };

});