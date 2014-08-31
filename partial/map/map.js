angular.module('ingr-web').controller('MapCtrl', function ($scope, $rootScope, mapsHelper, localizedContent) {
  'use strict';

  $scope.localizedContent = localizedContent;

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
        });
      }
    }
  };

  $scope.mapOptions = {
    mapTypeControl: false,
    streetViewControl: false,
    scrollwheel: false
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

  $rootScope.$watch('place', function(place) {
    console.log('meow', place);
    $scope.map.center.latitude = place.lat;
    $scope.map.center.longitude = place.lng;
  }, true);

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
        if (error.message === 'User denied Geolocation'){
          return;
        }
        mapsHelper.locationLookupFailure = true;
      });

    // Café Pascal
    $scope.map.center.latitude = 59.34199;
    $scope.map.center.longitude = 18.051995;
  };

  $scope.$watch(function() {
    return mapsHelper.getCurrentPosition();
  }, function(p) {
    console.log('mhUpdate', p);
  });
  
});