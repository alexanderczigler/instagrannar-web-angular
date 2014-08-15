angular.module('ingr-web').controller('ControlPanelCtrl', function ($scope, $rootScope, place) {
  'use strict';

  $scope.map = {
    events: {
      tilesloaded: function (map) {
        $scope.$apply(function () {
          console.log('meow');
        });
      }
    },
    center: {
      longitude: 18.051995,
      latitude: 59.34199
    },
    zoom: 14
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
  $scope.place.dst = 500;

  $scope.load = function() {
    $rootScope.safeApply(function () {
      $rootScope.place.lng = $scope.map.center.longitude;
      $rootScope.place.lat = $scope.map.center.latitude;
      $scope.place.dst = $scope.getDistance($scope.map.zoom);
      $rootScope.place.reload = true;
    });
  };

  $scope.$watch('map', function() {
    console.log($scope.map.events);
    try {
      navigator.geolocation.getCurrentPosition(function(data) {
        console.log('success', data);
      }, function(errorData){
        console.log('position error', errorData);
      }, null);
    } catch(e) {
      console.log('err', e);
    }
  });

  $scope.getDistance = function(zoom) {
    var scale = {
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
    };

    return scale[zoom];
  };

});