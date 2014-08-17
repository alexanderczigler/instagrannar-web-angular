angular.module('ingr-web').controller('ControlPanelCtrl', function ($scope, $rootScope, place) {
  'use strict';

  $scope.map = {
    center: {
      longitude: 18.051995,
      latitude: 59.34199
    },
    zoom: 14
  };

  $scope.place = $rootScope.place;

  $scope.place.lng = $scope.map.center.longitude;
  $scope.place.lat = $scope.map.center.latitude;
  $scope.place.dst = 500;

  $scope.load = function() {
    $rootScope.safeApply(function () {
      $rootScope.place.lng = $scope.map.center.longitude;
      $rootScope.place.lat = $scope.map.center.latitude;
      $rootScope.place.reload = true;

      $scope.place.dst = $scope.getDistance($scope.map.zoom);
      console.log($scope.map.zoom);
    });
  };

  $scope.getDistance = function(zoom) {
    if (zoom <= 10) {
      return 5000;
    }

    if (zoom > 16) {
      return 500;
    }

    var reference = 16 - zoom;
    return 500 * reference;
  };

});