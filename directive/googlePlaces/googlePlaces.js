angular.module('ingr-web').directive('googlePlaces', function (mapsHelper, $rootScope, viewport, locationSearch) {
  'use strict';
  
  /* global google */

  return {
    restrict: 'E',
    replace: true,
    scope: {
      location:'='
    },
    templateUrl: 'directive/googlePlaces/googlePlaces.html',
    link: function($scope, elm, attrs){
      $scope.lastSearch = '';
      var autocomplete = new google.maps.places.Autocomplete($('#google_places_ac')[0], {});
        google.maps.event.addListener(autocomplete, 'place_changed', function() {
          var place = autocomplete.getPlace();
          locationSearch.lastSearch = place.formatted_address;
          $rootScope.safeApply(function () {
            if (!place.geometry){
              return;
            }
            viewport.latitude = place.geometry.location.lat();
            viewport.longitude = place.geometry.location.lng();
            viewport.zoomLevel = 14;
            $rootScope.loadPictures = true;
          });
        });

        $scope.location = {};
        $scope.currentPosition = mapsHelper.currentPosition;
        $scope.doSearch = function() {
          if($scope.location === '') {
            console.log('Warning', 'Directive did not update the location property in parent controller.');
          } else {
            console.log('Location found: ', $scope.currentPosition);
          }
        };

        $scope.$watch(function () { return locationSearch.lastSearch; }, function (lastSearch) {
          $scope.lastSearch = lastSearch;
        }, true);
    }
  };
});