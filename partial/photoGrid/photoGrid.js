angular.module('ingr-web').controller('PhotoGridCtrl', function ($scope, $rootScope, apiUrls, $http, mapsHelper, localizedContent) {
  'use strict';

  $scope.mapsHelper = mapsHelper;

  $scope.locationLookupFailure = false;
  $scope.localizedContent = localizedContent;

  $scope.grams = {};

  $scope.error = false;
  $scope.errorDescription = '';

  $scope.getPictures = function (lat, lng, dst) {
    var byLocation = apiUrls.byLocation;
    byLocation = byLocation.replace('{lat}', lat);
    byLocation = byLocation.replace('{lng}', lng);
    byLocation = byLocation.replace('{dst}', dst);

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

  $rootScope.$watch('place', function(place) {
    if (!!$rootScope.place.reload) {
      $rootScope.place.reload = false;
      $scope.getPictures(place.lat, place.lng, place.dst);
    }
  }, true);

  $scope.$watch(function() {
    return mapsHelper.locationLookupFailure;
  }, function(f) {
    $scope.locationLookupFailure = f;
  });

});