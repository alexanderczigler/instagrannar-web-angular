angular.module('ingr-web').controller('PictureLoaderCtrl', function ($scope, $rootScope, mapsHelper, $timeout, localizedContent, zoom) {
  'use strict';

  $scope.localizedContent = localizedContent;
  $scope.place = $rootScope.place;
  $scope.buttonDisabled = false;

  $scope.load = function(zoomLevel) {
    $scope.buttonDisabled = true;
    $rootScope.safeApply(function () {
      $rootScope.loadPictures = true;
    });
  };

  $rootScope.$watch('loadPictures', function(l) {
    if (!l) {
      $timeout(function() {
        $scope.buttonDisabled = false;
      }, 2000);
    }
  }, true);

});