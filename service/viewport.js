angular.module('ingr-web').service('viewport', function () {
  'use strict';

  var viewport = {
    latitude: 0.0,
    longitude: 0.0,
    zoomLevel: 14
  };

  return viewport;
});