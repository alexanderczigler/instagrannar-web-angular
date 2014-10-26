angular.module('ingr-web').controller('PhotoGridCtrl', function ($scope, $rootScope, apiUrls, mapsHelper, localizedContent, viewport, zoom, ad, instagram, images) {
  'use strict';

  $scope.mapsHelper = mapsHelper;

  $scope.locationLookupFailure = false;
  $scope.localizedContent = localizedContent;

  $scope.grams = {};

  $scope.error = false;
  $scope.errorDescription = '';

  $scope.t = function (time) {
    return new Date(time * 1000);
  };

  /*
   * Watch for the signal to load pictures from Instagram.
   */
  $rootScope.$watch('loadPictures', function(place) {
    if (!!$rootScope.loadPictures) {
      $rootScope.loadPictures = false;
      instagram.getPictures(function(data, status, headers, config) {
        $scope.error = false;
      }, function(data, status, headers, config) {
        console.log('Unable to load photos.', data);
        $scope.error = true;
        $scope.errorDescription = localizedContent.read('pictureLoadFailureErrorMessage');
      });
    }
  }, true);

  $scope.$watch(function() {
    return mapsHelper.locationLookupFailure;
  }, function(f) {
    if (!!f){
      $scope.locationLookupFailure = f;
    }
  });

  $scope.$watch(function() {
    return images.data;
  }, function(images) {
    if (!!images){
      $scope.grams = images;
    }

    /*if (!images.data) {
      $rootScope.safeApply(function () {
        $rootScope.loadPictures = true;
      });
    }*/
  }, true);

});