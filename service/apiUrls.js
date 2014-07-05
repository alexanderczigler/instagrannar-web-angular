angular.module('ingr-web').service('apiUrls', function () {
  'use strict';

  var apiUrls = {
    base: "http://localhost:12345/?url=",
    byLocation: 'api.instagram.com/v1/media/search?lat={lat}&lng={lng}&client_id={clientId}'
  };

  return apiUrls;
});