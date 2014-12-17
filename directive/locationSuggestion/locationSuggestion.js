angular.module('ingr-web').directive('locationSuggestion', function ($rootScope, $timeout, suggestedLocations, viewport) {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    scope: {

    },
    templateUrl: 'directive/locationSuggestion/locationSuggestion.html',
    link: function (scope, element, attrs, fn) {

      scope.suggestedLocation = {};

      scope.refreshSuggestedLocation = function() {
        scope.suggestedLocation = suggestedLocations.randomSuggestion();
      };

      scope.loadSuggestion = function() {
        $rootScope.safeApply(function () {
          viewport.latitude = scope.suggestedLocation.latitude;
          viewport.longitude = scope.suggestedLocation.longitude;
          viewport.zoomLevel = viewport.defaultZoomLevel;
          $rootScope.loadPictures = true;
          $timeout(function() {
            scope.refreshSuggestedLocation();
          }, 1000);
        });
      };

      // On init - refresh location.
      scope.refreshSuggestedLocation();
    }
  };
});
