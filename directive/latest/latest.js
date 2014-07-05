angular.module('ingr-web').directive('latest', function ($http, apiUrls) {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    scope: {

    },
    templateUrl: 'directive/latest/latest.html',
    link: function (scope, element, attrs, fn) {

      var byLocation = apiUrls.byLocation;
      byLocation = byLocation.replace('{clientId}', 'be71f88c135c49d29659702774b86f74');
      byLocation = byLocation.replace('{lat}', '59.34199');
      byLocation = byLocation.replace('{lng}', '18.051995');

      var url = apiUrls.base + byLocation;

      scope.grams = {};

      $http({method: 'GET', url: url}).
        success(function(data, status, headers, config) {
          scope.grams = data;
        }).
        error(function(data, status, headers, config) {
          console.log('Unable to load photos.', data);
        });

    }
  };
});
