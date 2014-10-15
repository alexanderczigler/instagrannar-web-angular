angular.module('ingr-web').directive('photo', function ($rootScope) {
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
        moment.locale('sv', function () {});
        var day = moment.unix(time);
        var m = moment(day, 'YYYYMMDD').fromNow();
        return m;
      };

      scope.modal = false;
      scope.toggleModal = function() {
        $rootScope.safeApply(function() {
          $rootScope.selectedInstagram = angular.copy(scope.instagram);
        });
      };

    }
  };
});
