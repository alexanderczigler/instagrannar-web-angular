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
      //console.log('instagram', scope.instagram);

      scope.displayLightbox = function(id) {

      };

      scope.t = function (time) {
        return new Date(time * 1000);
      };

    }
  };
});
