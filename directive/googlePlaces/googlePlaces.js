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
        var autocomplete = new google.maps.places.Autocomplete($('#google_places_ac')[0], {});
        google.maps.event.addListener(autocomplete, 'place_changed', function() {
            var place = autocomplete.getPlace();
            $rootScope.safeApply(function () {

              if (!place.geometry){
                return;
              }

              mapsHelper.currentPosition.latitude = place.geometry.location.lat();
              mapsHelper.currentPosition.longitude = place.geometry.location.lng();
              console.log('values set', mapsHelper.currentPosition.latitude);

              if($scope.location === '') {
                console.log('Directive did not update the location property in parent controller.');
              } else {
                console.log('Yay. Location: ', $scope.currentPosition);
                $rootScope.safeApply(function () {
                  $rootScope.place.lat = $scope.currentPosition.latitude;
                  $rootScope.place.lng = $scope.currentPosition.longitude;
                });
              }
            });


            
        });

        $scope.location = {};
        $scope.currentPosition = mapsHelper.currentPosition;
        $scope.doSearch = function() {
          if($scope.location === '') {
            console.log('Directive did not update the location property in parent controller.');
          } else {
            console.log('Yay. Location: ', $scope.currentPosition);
            $rootScope.safeApply(function () {
              $rootScope.place.lat = $scope.currentPosition.latitude;
              $rootScope.place.lng = $scope.currentPosition.longitude;
            });
          }
        };
    }
  };
});