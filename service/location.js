angular.module('ingr-web').service('location', function (viewport, $timeout, $rootScope) {
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
      $timeout(function () {
        navigator.geolocation.getCurrentPosition(function(data) {
          if (!!data.coords) {
            this.hasAsked = true;
            this.lookupSuccess = true;
            $rootScope.safeApply(function () {
              viewport.latitude = data.coords.latitude;
              viewport.longitude = data.coords.longitude;
            });
          }
        },
        function (error) {
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