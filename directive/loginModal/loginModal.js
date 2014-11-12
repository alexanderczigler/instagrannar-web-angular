angular.module('ingr-web').directive('loginModal', function ($cookies, $window, apiUrls) {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    scope: {

    },
    templateUrl: 'directive/loginModal/loginModal.html',
    link: function (scope, element, attrs, fn) {

      scope.oauthUrl = apiUrls.oauth.base.replace('{client_id}', apiUrls.oauth.client_id).replace('{redirect_uri}', apiUrls.oauth.redirect_uri);

      scope.hasAuthToken = false;
      
      scope.doInstagramLogin = function() {
        $window.location = scope.oauthUrl;
      };

      scope.doNoLogin = function() {
        $cookies.guestat = 'guest';
      };

      scope.$watch(function () { return $cookies.guestat; }, function (at) {
        if (!!at) {
          scope.hasAuthToken = true;
        }
      }, true);

      scope.$watch(function () { return $cookies.instagrannarat; }, function (at) {
        if (!!at) {
          scope.hasAuthToken = true;
        }
      }, true);

    }
  };
});
