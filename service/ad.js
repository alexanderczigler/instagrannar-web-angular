angular.module('ingr-web').service('ad', function () {
  'use strict';

  var ad = {
    getAd: function() {
      return {
        user: {
          username: 'instagrannar'
        },
        caption: {
          text: 'Vill du synas här? Hör av dig till oss för att veta mer om annonsering på instagrannar!'
        },
        link: 'http://instagrannar.se/annonsering',
        images: {
          standard_resolution: {
            url: 'img/black.jpg'
          }
        }
      };
    }
  };

  return ad;
});