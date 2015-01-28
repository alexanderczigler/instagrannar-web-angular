angular.module('ingr-web').directive('instagramVideo', function ($compile) {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    scope: {
      url: '='
    },
    templateUrl: 'directive/instagramVideo/instagramVideo.html',
    link: function (scope, element, attrs, fn) {

      var newDirective = angular.element('<video src="' + scope.url + '" controls>Your browser does not support the <code>video</code> element.</video>');
      element.append(newDirective);
      $compile(newDirective)(scope);

    }
  };
});
