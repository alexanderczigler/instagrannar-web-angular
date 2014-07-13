angular.module('ingr-web').service('apiUrls', function () {
  'use strict';

  var apiUrls = {
    base: "http://localhost:3000/",
    byLocation: 'pictures/{lat}/{lng}'
  };

  return apiUrls;
});