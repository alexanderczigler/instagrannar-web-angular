angular.module('ingr-web').controller('MapCtrl', function ($scope, $rootScope, mapsHelper, localizedContent) {
  'use strict';

  $scope.localizedContent = localizedContent;
  $scope.place = $rootScope.place;

  $scope.place.lng = 0.0;
  $scope.place.lat = 0.0;
  $scope.place.dst = 350;

  function updateLocationFromMap(map) {
    $rootScope.safeApply(function () {
      $scope.place.lat = map.center.k;
      $scope.place.lng = map.center.B;
      $scope.place.dst = mapsHelper.mapZoomToDistance(map.zoom);
    });
  }

  $scope.map = {
    center: {
      longitude: 0.0,
      latitude: 0.0
    },
    zoom: 14,
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

  $scope.load = function() {
    $rootScope.safeApply(function () {
      $rootScope.place.reload = true;
    });
  };

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
        if (error.message === 'User denied Geolocation'){
          return;
        }
        mapsHelper.locationLookupFailure = true;
      });

    // Café Pascal
    $scope.map.center.latitude = 59.34199;
    $scope.map.center.longitude = 18.051995;
  };

  /*
   * Watches.
   */

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

  $rootScope.$watch('place', function(place) {
    $scope.map.center.latitude = place.lat;
    $scope.map.center.longitude = place.lng;
  }, true);

  $scope.$watch(function() {
    return mapsHelper.getCurrentPosition();
  }, function(p) {
    console.log('mhUpdate', p);
  });
  
});