angular.module('ingr-web').directive('googlePlaces', function (mapsHelper, $rootScope) {
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
        var autocomplete = new google.maps.places.Autocomplete($("#google_places_ac")[0], {});
        google.maps.event.addListener(autocomplete, 'place_changed', function() {
            var place = autocomplete.getPlace();
            $rootScope.safeApply(function () {
              mapsHelper.currentPosition.latitude = place.geometry.location.lat();
              mapsHelper.currentPosition.longitude = place.geometry.location.lng();
              console.log('values set', mapsHelper.currentPosition.latitude);
            });
            
        });
    }
  };
});