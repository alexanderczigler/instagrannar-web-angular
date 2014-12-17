angular.module('ingr-web').service('environment', function ($location) {
  'use strict';

  var environment = {
    isDev: function() {
      return $location.host() === 'localhost';
    },
    isStage: function() {
      return $location.host().indexOf('stage') > -1;
    },
    isProd: function() {
      return !this.isDev() && !this.isStage();
    }
  };

  return environment;
});