angular.module('ingr-web').service('location', function (viewport) {
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
      navigator.geolocation.getCurrentPosition(function(data) {
        console.log('a', data.coords);
        if (!!data.coords) {
          this.hasAsked = true;
          this.lookupSuccess = true;
          viewport.latitude = data.coords.latitude;
          viewport.longitude = data.coords.longitude;
        }
      },
      function (error) {
        if (error.message === 'User denied Geolocation'){
          // User denied.
          return;
        }
        // Other error.
        this.hasAsked = true;
      });
    }
  };

  return location;
});