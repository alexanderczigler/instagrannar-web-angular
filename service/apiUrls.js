angular.module('ingr-web').service('apiUrls', function (environment) {
  'use strict';

  if (environment.isDev()) {
    return {
      byLocation: 'pictures/{longitude}/{latitude}/{zoomlevel}',
      byId: 'pictures/{id}',
      base: 'http://www.instagrannar.se:3000/',
      oauth: {
        base: 'https://instagram.com/oauth/authorize/?client_id={client_id}&redirect_uri={redirect_uri}&response_type=token',
        client_id: '99ae0c29782c49c7af438178b4e81cfb',
        redirect_uri: 'http://localhost:9001/oauth.html'
      }
    };
  }
  else if (environment.isStage()) {
    return {
      byLocation: 'pictures/{longitude}/{latitude}/{zoomlevel}',
      byId: 'pictures/{id}',
      base: 'http://stage.instagrannar.se:3000/',
      oauth: {
        base: 'https://instagram.com/oauth/authorize/?client_id={client_id}&redirect_uri={redirect_uri}&response_type=token',
        client_id: '7a3817be7a7e498aa53a23c3110811df',
        redirect_uri: 'http://stage.instagrannar.se/oauth.html'
      }
    };
  }
  else {
    return {
      byLocation: 'pictures/{longitude}/{latitude}/{zoomlevel}',
      byId: 'pictures/{id}',
      base: 'http://instagrannar.se:3000/',
      oauth: {
        base: 'https://instagram.com/oauth/authorize/?client_id={client_id}&redirect_uri={redirect_uri}&response_type=token',
        client_id: '71b70b10157a4b42b9a578507de24436',
        redirect_uri: 'http://instagrannar.se/oauth.html'
      }
    };
  }

});
