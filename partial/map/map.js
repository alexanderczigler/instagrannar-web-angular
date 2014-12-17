angular.module('ingr-web').controller('MapCtrl', function ($scope, $rootScope, mapsHelper, localizedContent, viewport, zoom, environment) {
  'use strict';

  $scope.localizedContent = localizedContent;
  $scope.viewport = viewport;
  $scope.zoom = zoom;

  $scope.url = environment.url();

  /*
   * Used by callbacks from the map control.
   */
  function updateLocationFromMap(map, load) {
    $rootScope.safeApply(function () {
      viewport.latitude = map.center.k;
      viewport.longitude = map.center.D;
      viewport.zoomLevel = map.zoom;
      if (!!load) {
        $rootScope.loadPictures = true;
      }
    });
  }

  $scope.map = {
    center: {
      latitude: viewport.latitude,
      longitude: viewport.longitude
    },
    zoom: viewport.zoomLevel,
    events: {
      tilesloaded: function (map) {
        updateLocationFromMap(map, false);
      },
      dragend: function (map) {
        updateLocationFromMap(map, true);
      },
      zoom_changed: function (map) {
        updateLocationFromMap(map, true);
      }
    },
    options: {
      mapTypeControl: false,
      streetViewControl: false,
      scrollwheel: false
    },
    circleStroke: {
      color: '#303030',
      weight: 0.2,
      opacity: 0.5
    }
  };

  $scope.$watch(function() { return viewport; }, function (viewport) {
    if (!!viewport){
      $scope.map.zoom = viewport.zoomLevel;
      $scope.map.center.latitude = viewport.latitude;
      $scope.map.center.longitude = viewport.longitude;
    }
  }, true);
  
});