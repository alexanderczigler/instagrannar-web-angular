angular.module('ingr-web').directive('latest', function ($http) {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    scope: {

    },
    templateUrl: 'directive/latest/latest.html',
    link: function (scope, element, attrs, fn) {
      var url = 'http://localhost:12345/?url=api.instagram.com/v1/media/search?lat=59.341994&lng=18.051995&client_id=be71f88c135c49d29659702774b86f74';
      //
      //59.341994, 18.051995

      scope.grams = {};

      $http({method: 'GET', url: url}).
        success(function(data, status, headers, config) {
          scope.grams = data;
        }).
        error(function(data, status, headers, config) {
          console.log('Unable to load stations!', data);
        });

    }
  };
});
