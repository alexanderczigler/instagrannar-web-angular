angular.module('ingr-web').service('mapsHelper', function (viewport) {
  'use strict';

  var mapsHelper = {
    currentPosition: {
        latitude: 0.0,
        longitude: 0.0,
        zoom: 14
    },
    getCurrentPosition: function() {
        return this.currentPosition;
    },
    locationLookupFailure: false,
    lookupCurrentLocation: function(successCallback, errorCallback) {
      //navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  };

  return mapsHelper;
});