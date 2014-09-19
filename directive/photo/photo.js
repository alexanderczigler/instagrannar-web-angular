angular.module('ingr-web').directive('photo', function () {
  'use strict';
/* global moment */

  return {
    restrict: 'E',
    replace: true,
    scope: {
      instagram: '='
    },
    templateUrl: 'directive/photo/photo.html',
    link: function (scope, element, attrs, fn) {
      scope.t = function (time) {
        var day = moment.unix(time);
        var m = moment(day, 'YYYYMMDD').fromNow();
        return m;
      };

      scope.modal = false;
      scope.show = function() {
        scope.modal = !scope.modal;
      };

    }
  };
});
