angular.module('ingr-web').controller('PictureLoaderCtrl', function ($scope, $rootScope, mapsHelper, $timeout, localizedContent, zoom, suggestedLocations, viewport) {
  'use strict';

  $scope.localizedContent = localizedContent;
  $scope.place = $rootScope.place;
  $scope.buttonDisabled = false;

  $scope.suggestedLocation = suggestedLocations.randomSuggestion();

  $scope.load = function() {
    $scope.buttonDisabled = true;
    $rootScope.safeApply(function () {
      viewport.latitude = $scope.suggestedLocation.latitude;
      viewport.longitude = $scope.suggestedLocation.longitude;
      viewport.zoomLevel = viewport.defaultZoomLevel;
      $rootScope.loadPictures = true;
      $timeout(function() {
        $scope.buttonDisabled = false;
      }, 2000);
    });
  };

});