angular.module('ingr-web').service('location', function (viewport, $timeout, $rootScope, $location) {
  'use strict';

  var location = {
    hasAsked: false,
    lookupSuccess: false,
    setViewPort: function () {
      if (this.hasAsked) {
        return;
      }
      if (!navigator) {
        return;
      }
      if (!navigator.geolocation) {
        return;
      }
      if (!!$location.search().latitude && !!$location.search().longitude && $location.search().zoom) {
        //$rootScope.safeApply(function () {
          viewport.latitude = $location.search().latitude;
          viewport.longitude = $location.search().longitude;
          viewport.zoomLevel = parseInt($location.search().zoom);
          $rootScope.loadPictures = true;
        //});
        return;
      }
      $timeout(function () {
        navigator.geolocation.getCurrentPosition(function(data) {
          if (!!data.coords) {
            this.hasAsked = true;
            this.lookupSuccess = true;
            $rootScope.safeApply(function () {
              viewport.latitude = data.coords.latitude;
              viewport.longitude = data.coords.longitude;
              $rootScope.loadPictures = true;
            });
          }
        },
        function (error) {
          $rootScope.safeApply(function () {
            $rootScope.loadPictures = true;
          });
          if (error.message === 'User denied Geolocation'){
            console.log('User denied location');
            this.hasAsked = true;
            return;
          }
          console.log('Error', 'Location lookup error.');
          this.hasAsked = true;
        });
      }, 100);
    }
  };

  return location;
});