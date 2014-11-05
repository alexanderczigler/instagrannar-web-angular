angular.module('ingr-web').controller('PhotoGridCtrl', function ($scope, $rootScope, $location, apiUrls, mapsHelper, localizedContent, viewport, zoom, ad, instagram, images, $cookies) {
  'use strict';

  $scope.mapsHelper = mapsHelper;

  $scope.locationLookupFailure = false;
  $scope.localizedContent = localizedContent;

  $scope.grams = {};

  $scope.error = false;
  $scope.errorDescription = '';

  $scope.oauthUrl = apiUrls.oauth.base.replace('{client_id}', apiUrls.oauth.client_id).replace('{redirect_uri}', apiUrls.oauth.redirect_uri);
  $scope.hasAuthToken = false;

  if (!!$cookies.instagrannarat){
    $scope.hasAuthToken = true;
  }

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
    return viewport;
  }, function(vp) {
    if (!!vp){
      $location.search('latitude', vp.latitude);
      $location.search('longitude', vp.longitude);
      $location.search('zoom', vp.zoomLevel);
    }
  }, true);

  $scope.$watch(function() {
    return images.data;
  }, function(images) {
    if (!!images){
      $scope.grams = images;
    }
  }, true);

});