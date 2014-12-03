angular.module('ingr-web').service('apiUrls', function () {
  'use strict';

  var apiUrls = {
    //base: "http://localhost:3000/",
    base: 'http://instagrannar.se:3000/',
    byLocation: 'pictures/{longitude}/{latitude}/{zoomlevel}',
    byId: 'pictures/{id}',
    oauth: {
      base: 'https://instagram.com/oauth/authorize/?client_id={client_id}&redirect_uri={redirect_uri}&response_type=token',
      client_id: '71b70b10157a4b42b9a578507de24436',
      redirect_uri: 'http://www.instagrannar.se/oauth.html'
    }
    /*
    oauth: {
      base: 'https://instagram.com/oauth/authorize/?client_id={client_id}&redirect_uri={redirect_uri}&response_type=token',
      client_id: '99ae0c29782c49c7af438178b4e81cfb',
      redirect_uri: 'http://localhost:9001/oauth.html'
    }
    */
    /*
    oauth: {
      base: 'https://instagram.com/oauth/authorize/?client_id={client_id}&redirect_uri={redirect_uri}&response_type=token',
      client_id: '7a3817be7a7e498aa53a23c3110811df',
      redirect_uri: 'http://stage.instagrannar.se/oauth.html'
    }
    */
  };

  return apiUrls;
});
