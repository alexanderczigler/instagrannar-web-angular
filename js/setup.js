angular.module('ingr-web', ['ui.router', 'ngResource', 'google-maps']);

angular.module('ingr-web').config(function ($stateProvider, $urlRouterProvider) {
  'use strict';

  $stateProvider.state('annonsering', {
    url: '/annonsering',
    templateUrl: 'partial/annonsering/annonsering.html'
  });
	$stateProvider.state('legal', {
    url: '/legal',
    templateUrl: 'partial/legal/legal.html'
  });
  $stateProvider.state('image', {
    url: '/image/:id',
    controller: 'PhotoViewCtrl',
    templateUrl: 'partial/photoView/photoView.html'
  });
  $stateProvider.state('search', {
    url: '/search',
    controller: 'PhotoGridCtrl',
    templateUrl: 'partial/photoGrid/photoGrid.html'
  });
	/* Add New Routes Above */
  
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise('/search');

});

angular.module('ingr-web').run(function ($rootScope, $timeout, location) {
  'use strict';

  $rootScope.loadPictures = false;
  $rootScope.selectedInstagram = {};

  location.setViewPort();

  $rootScope.safeApply = function (fn) {
    var phase = $rootScope.$$phase;
    if (phase === '$apply' || phase === '$digest') {
      if (fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

});