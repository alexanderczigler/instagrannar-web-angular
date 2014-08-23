angular.module('ingr-web').directive('latest', function ($rootScope, $http, apiUrls) {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    scope: {

    },
    templateUrl: 'directive/latest/latest.html',
    link: function (scope, element, attrs, fn) {


    }
  };
});
