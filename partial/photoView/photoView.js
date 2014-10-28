angular.module('ingr-web').controller('PhotoViewCtrl', function ($scope, $rootScope, $stateParams, images, $anchorScroll, $timeout, $window) {
  'use strict';

  /* global moment */

  $scope.instagram = {};

  if (!!$stateParams.id) {
    $anchorScroll();
    if (!images.data.data) {
      $window.location = '/#/search';
      return;
    }
    images.data.data.map(function (i) {
      if (i.id === $stateParams.id) {
        $scope.instagram = i;
      }
    });
  }

  $scope.t = function (time) {
    moment.locale('sv', function () {});
    var day = moment.unix(time);
    var m = moment(day, 'YYYYMMDD').fromNow();
    return m;
  };

});