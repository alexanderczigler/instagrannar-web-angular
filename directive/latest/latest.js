angular.module('ingr-web').directive('latest', function ($rootScope, $http, apiUrls) {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    scope: {

    },
    templateUrl: 'directive/latest/latest.html',
    link: function (scope, element, attrs, fn) {

      scope.places = {
        0: {
          'name': 'Vasastan',
          'lng': '18.051995',
          'lat': '59.34199'
        },
        1: {
          'name': 'Almedalen',
          'lng': '18.290297',
          'lat': '57.641200'
        },
        2: {
          'name': 'Belair',
          'lng': '138.634046',
          'lat': '-35.011028'
        },
        3: {
          'name': 'Wynyard',
          'lng': '151.205779',
          'lat': '-33.865726'
        }
      };

      scope.grams = {};

      scope.getPictures = function (lat, lng, dst) {
        console.log(lng, lat);
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

        console.log(place);

        if (!!$rootScope.place.reload) {
          $rootScope.place.reload = false;
          scope.getPictures(place.lat, place.lng, place.dst);
        }
      }, true);
    }
  };
});
