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
    },
    url: function() {
      var port = '';
      if ($location.port() !== 80){
        port = ':' + $location.port();
      }
      return 'http://' + $location.host() + port + '/#/search';
    }
  };

  return environment;
});