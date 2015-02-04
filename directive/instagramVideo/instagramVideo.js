angular.module('ingr-web').directive('instagramVideo', function ($compile) {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    scope: {
      videoUrl: '=',
      photoUrl: '='
    },
    templateUrl: 'directive/instagramVideo/instagramVideo.html',
    link: function (scope, element, attrs, fn) {

      // Create and compile video tag.
      var videoTag = '<video autoplay="true" loop="true" src="{videoUrl}">{content}</video>';
      var content = '<img src="{photoUrl}" />';
      
      content = content.replace('{photoUrl}', scope.photoUrl);
      videoTag = videoTag.replace('{videoUrl}', scope.videoUrl);
      videoTag = videoTag.replace('{content}', scope.content);
      
      var videoElement = angular.element(videoTag);
      element.append(videoElement);
      $compile(videoElement)(scope);

    }
  };
});
