angular.module('ingr-web').directive('latest', function ($rootScope, $http, apiUrls) {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    scope: {

    },
    templateUrl: 'directive/latest/latest.html',
    link: function (scope, element, attrs, fn) {

      scope.grams = {};

      scope.getPictures = function (lat, lng, dst) {
        var byLocation = apiUrls.byLocation;
        byLocation = byLocation.replace('{lat}', lat);
        byLocation = byLocation.replace('{lng}', lng);
        byLocation = byLocation.replace('{dst}', dst);

        var url = apiUrls.base + byLocation;

        $http({method: 'GET', url: url}).
          success(function(data, status, headers, config) {
            scope.grams = data;
          }).
          error(function(data, status, headers, config) {
            console.log('Unable to load photos.', data);
          });
      };

      scope.t = function (time) {
        return new Date(time * 1000);
      };

      $rootScope.$watch('place', function(place) {
        if (!!$rootScope.place.reload) {
          $rootScope.place.reload = false;
          scope.getPictures(place.lat, place.lng, place.dst);
        }
      }, true);
    }
  };
});
