angular.module('ingr-web').service('place', function () {
  'use strict';

  var place = {
    lng: 18.051995,
    lat: 59.34199,
    dst: 1000,
    reload: false
  };

  return place;
});