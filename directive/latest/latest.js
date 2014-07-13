angular.module('ingr-web').directive('latest', function ($http, apiUrls) {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    scope: {

    },
    templateUrl: 'directive/latest/latest.html',
    link: function (scope, element, attrs, fn) {

      scope.coordinates = {
        'lat': '',
        'lng': ''
      };

      scope.places = {
        0: {
          name: 'Vasastan',
          'lat': '18.051995',
          'lng': '59.34199'
        },
        1: {
          name: 'Almedalen',
          'lat': '18.290297',
          'lng': '57.641200'
        },
        2: {
          name: 'Belair',
          'lat': '138.634046',
          'lng': '-35.011028'
        },
        3: {
          name: 'Wynyard',
          lat: '151.205779',
          lng: '-33.865726'
        }
      };

      scope.grams = {};

      scope.getPictures = function (lat, lng) {
        console.log(lat, lng);
        var byLocation = apiUrls.byLocation;
        byLocation = byLocation.replace('{lat}', lat);
        byLocation = byLocation.replace('{lng}', lng);

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

    }
  };
});
