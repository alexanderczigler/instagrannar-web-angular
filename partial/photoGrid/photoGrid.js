angular.module('ingr-web').controller('PhotoGridCtrl', function ($scope, $rootScope, apiUrls, $http, mapsHelper, localizedContent, viewport, zoom, ad) {
  'use strict';

  $scope.mapsHelper = mapsHelper;

  $scope.locationLookupFailure = false;
  $scope.localizedContent = localizedContent;

  $scope.grams = {};

  $scope.error = false;
  $scope.errorDescription = '';

  function randomPosition(max) {
    var r = Math.random();
    var q = r * max;
    var position = Math.floor(q);
    return position;
  }

  $scope.getPictures = function () {
    var byLocation = apiUrls.byLocation;
    byLocation = byLocation.replace('{latitude}', viewport.latitude);
    byLocation = byLocation.replace('{longitude}', viewport.longitude);
    byLocation = byLocation.replace('{zoomlevel}', zoom.radius(viewport.zoomLevel));

    var url = apiUrls.base + byLocation;

    $http({method: 'GET', url: url}).
      success(function(data, status, headers, config) {
        $scope.grams = data;
        if (!!data && data.data.length > 0) {
          var adPosition = randomPosition(data.data.length);
          data.data.splice(adPosition, 0, ad.getAd());
        }
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
    console.log('loadpictures händer nu');
    if (!!$rootScope.loadPictures) {
      $rootScope.loadPictures = false;
      $scope.getPictures();
    }
  }, true);

  $scope.$watch(function() {
    return mapsHelper.locationLookupFailure;
  }, function(f) {
    if (!!f){
      $scope.locationLookupFailure = f;
    }
  });

});