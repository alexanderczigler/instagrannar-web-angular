angular.module('ingr-web').controller('PhotoViewCtrl', function ($scope, $rootScope, $stateParams, images) {
  'use strict';

  $scope.instagram = {};

  if (!!$stateParams.id) {
    console.log('a', images.data);
    images.data.data.map(function (i) {
      if (i.id === $stateParams.id) {
        $scope.instagram = i;
      }
    });
  }

  $scope.t = function (time) {
    var day = moment.unix(time);
    var m = moment(day, 'YYYYMMDD').fromNow();
    return m;
  };

});