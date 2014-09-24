angular.module('ingr-web').controller('PhotoGridCtrl', function ($scope, $rootScope, apiUrls, $http, mapsHelper, localizedContent, viewport, zoom) {
  'use strict';

  $scope.mapsHelper = mapsHelper;

  $scope.locationLookupFailure = false;
  $scope.localizedContent = localizedContent;

  $scope.grams = {};

  $scope.error = false;
  $scope.errorDescription = '';

  $scope.getPictures = function () {
    var byLocation = apiUrls.byLocation;
    byLocation = byLocation.replace('{latitude}', viewport.latitude);
    byLocation = byLocation.replace('{longitude}', viewport.longitude);
    byLocation = byLocation.replace('{zoomlevel}', zoom.radius(viewport.zoomLevel));

    var url = apiUrls.base + byLocation;

    $http({method: 'GET', url: url}).
      success(function(data, status, headers, config) {
        $scope.grams = data;
        $scope.error = false;
      }).
      error(function(data, status, headers, config) {
        console.log('Unable to load photos.', data);
        $scope.error = true;
        $scope.errorDescription = localizedContent.read('pictureLoadFailureErrorMessage');
      });
  };

  $scope.t = function (time) {
    return new Date(time * 1000);
  };

  /*
   * Watch for the signal to load pictures from Instagram.
   */
  $rootScope.$watch('loadPictures', function(place) {
    if (!!$rootScope.loadPictures) {
      $rootScope.loadPictures = false;
      $scope.getPictures();
    }
  }, true);

  $scope.$watch(function() {
    return mapsHelper.locationLookupFailure;
  }, function(f) {
    $scope.locationLookupFailure = f;
  });

});