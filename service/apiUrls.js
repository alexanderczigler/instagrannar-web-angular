angular.module('ingr-web').service('apiUrls', function () {
  'use strict';

  var apiUrls = {
    base: "http://localhost:3000/",
    //base: 'http://instagdev2.cloudapp.net:3000/',
    byLocation: 'pictures/{longitude}/{latitude}/{zoomlevel}',
    oauth: {
      base: 'https://instagram.com/oauth/authorize/?client_id={client_id}&redirect_uri={redirect_uri}&response_type=token',
      client_id: '71b70b10157a4b42b9a578507de24436',
      redirect_uri: 'http://www.instagrannar.se/oauth.html'
    }
  };

  return apiUrls;
});
