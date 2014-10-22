angular.module('ingr-web').controller('MapCtrl', function ($scope, $rootScope, mapsHelper, localizedContent, viewport, zoom) {
  'use strict';

  $scope.localizedContent = localizedContent;
  $scope.viewport = viewport;
  $scope.zoom = zoom;

  /*
   * Used by callbacks from the map control.
   */
  function updateLocationFromMap(map) {
    $rootScope.safeApply(function () {
      viewport.latitude = map.center.k;
      viewport.longitude = map.center.B;
      viewport.zoomLevel = map.zoom;
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
        updateLocationFromMap(map);
      },
      dragend: function (map) {
        updateLocationFromMap(map);
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
      $scope.map.center.latitude = viewport.latitude;
      $scope.map.center.longitude = viewport.longitude;
    }
  }, true);
  
});