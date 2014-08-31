angular.module('ingr-web').service('localizedContent', function () {
  'use strict';

  var localizedContent = {
    language: 'sv',
    read: function(s) {
      return this.ui[this.language][s];
    },
    ui: {
      sv:{
        getPictures: 'Ladda bilder',
        locationLookupErrorMessage: 'Kunde tyvärr inte hämta din plats.'
      }
    }
  };

  return localizedContent;
});