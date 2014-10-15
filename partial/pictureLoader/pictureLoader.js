angular.module('ingr-web').controller('PictureLoaderCtrl', function ($scope, $rootScope, mapsHelper, $timeout, localizedContent, zoom) {
  'use strict';

  $scope.localizedContent = localizedContent;
  $scope.place = $rootScope.place;
  $scope.buttonDisabled = false;

  $scope.load = function(zoomLevel) {
    $scope.buttonDisabled = true;
    $rootScope.safeApply(function () {
      $rootScope.loadPictures = true;
      $rootScope.selectedInstagram = {};
      $timeout(function() {
        $scope.buttonDisabled = false;
      }, 2000);
    });
  };

});