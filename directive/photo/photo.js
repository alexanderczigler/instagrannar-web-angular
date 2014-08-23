angular.module('ingr-web').directive('photo', function () {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    scope: {
      instagram: '='
    },
    templateUrl: 'directive/photo/photo.html',
    link: function (scope, element, attrs, fn) {

      /*
       * Converts UNIX time to a readable timestamp with date.
       */
      scope.t = function (time) {
        return new Date(time * 1000);
      };

    }
  };
});
