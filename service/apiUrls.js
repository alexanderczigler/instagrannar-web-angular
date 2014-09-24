angular.module('ingr-web').service('apiUrls', function () {
  'use strict';

  var apiUrls = {
    //base: "http://localhost:3000/",
    base: 'http://instagdev2.cloudaspp.net:3000/',
    byLocation: 'pictures/{lng}/{lat}/{dst}'
  };

  return apiUrls;
});
