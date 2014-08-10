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

    }
  };
});
