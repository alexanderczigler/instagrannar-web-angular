angular.module('ingr-web').controller('ControlPanelCtrl', function ($scope, $rootScope, place, mapsHelper) {
  'use strict';

  $scope.map = {
    center: {
      longitude: 0.0,
      latitude: 0.0
    },
    zoom: 14,
    events: {
      tilesloaded: function (map) {
        $rootScope.safeApply(function () {
          // Event fired each time the map changes.
          // We make sure the place variable is updated.
          $scope.place.lat = map.center.k;
          $scope.place.lng = map.center.B;
          $scope.place.dst = mapsHelper.mapZoomToDistance(map.zoom);
          console.log('map-change', map.center);
        });
      }
    }
  };

  $scope.mapOptions = {
    mapTypeControl: false,
    streetViewControl: false
  };

  $scope.circleStroke= {
    color: "#303030",
    weight: 0.2,
    opacity: 0.5
  };

  $scope.place = $rootScope.place;

  $scope.place.lng = $scope.map.center.longitude;
  $scope.place.lat = $scope.map.center.latitude;
  $scope.place.dst = 350;

  $scope.load = function() {
    $rootScope.safeApply(function () {
      $rootScope.place.reload = true;
    });
  };

  $scope.$watch('place', function() {
    if (!!$rootScope.place.changed) {
      $rootScope.place.changed = false;
      $scope.load();
    }
  }, true);

  $scope.$watch('map', function() {
    if (!!$scope.map.center) {
      if ($scope.map.center.latitude === 0.0 && $scope.map.center.longitude === 0.0) {
        $scope.setCoords();
      }
    }
  });

  $scope.setCoords = function() {
    if (!!$scope.map.center.latitude && $scope.map.center.latitude !== 0.0) {
      return;
    }

    mapsHelper.lookupCurrentLocation(function(data) {
      if (!!data.coords) {
        $rootScope.safeApply(function() {
          $scope.map.center.latitude = data.coords.latitude;
          $scope.map.center.longitude = data.coords.longitude;
          return;
        });
      }
    },
    function(error) {
      console.log('Error: lookup current position', error);
    });

    // Café Pascal
    $scope.map.center.latitude = 59.34199;
    $scope.map.center.longitude = 18.051995;
  };

});