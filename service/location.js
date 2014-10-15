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
      console.log('Get location!');
      $timeout(function () {
        navigator.geolocation.getCurrentPosition(function(data) {
          console.log('Get location success');
          if (!!data.coords) {
            console.log('location data', data);
            this.hasAsked = true;
            this.lookupSuccess = true;
            console.log('viewport update from lookup');
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
          console.log('Other location error');
          this.hasAsked = true;
        });
      }, 1000);
    }
  };

  return location;
});