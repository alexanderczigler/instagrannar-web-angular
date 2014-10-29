angular.module('ingr-web').service('apiUrls', function () {
  'use strict';

  var apiUrls = {
    base: "http://localhost:3000/",
    //base: 'http://instagdev2.cloudapp.net:3000/',
    byLocation: 'pictures/{longitude}/{latitude}/{zoomlevel}',
    oauth: {
      base: 'https://instagram.com/oauth/authorize/?client_id={client_id}&redirect_uri={redirect_uri}&response_type=token',
      client_id: '99ae0c29782c49c7af438178b4e81cfb',
      redirect_uri: 'http://localhost:9001/oauth.html'
    }
  };

  return apiUrls;
});
