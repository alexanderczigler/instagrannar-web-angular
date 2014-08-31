angular.module('ingr-web').service('mapsHelper', function () {
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
    zoomRadiusMap: {
    1: 5000,
    2: 5000,
    3: 5000,
    4: 5000,
    5: 5000,
    6: 5000,
    7: 5000,
    8: 5000,
    9: 5000,
    10: 1250,
    11: 1000,
    12: 750,
    13: 500,
    14: 350,
    15: 200,
    16: 175,
    17: 125,
    18: 100,
    19: 75,
    20: 40,
    21: 20
    },
    mapZoomToDistance: function(zoom) {
      return this.zoomRadiusMap[zoom];
    },
    lookupCurrentLocation: function(successCallback, errorCallback) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  };

  return mapsHelper;
});