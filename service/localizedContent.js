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
        locationLookupErrorMessage: 'Kunde tyvärr inte hämta din plats.',
        pictureLoadFailureErrorMessage: 'Kunde inte få kontakt med Instagrams API, försök gärna igen senare.',
        generalErrorIntro: 'Ett fel har tyvärr uppstått.',
        description: 'Beskrivning',
        noPicturesFound: 'Hittade inga bilder! Prova att zooma ut eller flytta kartan till ett annat område.',
        introParagraph: 'Se vad som händer runtom dig! Använd kartan för att hitta de senaste bilderna på Instagram från just den platsen.'
      }
    }
  };

  return localizedContent;
});