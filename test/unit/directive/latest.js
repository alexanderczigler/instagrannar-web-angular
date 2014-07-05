describe('latest', function () {

  var $compile, $templateCache, outerScope, scope, element;

  beforeEach(function () {
    module('ingr-web');
    inject(function ($rootScope, _$compile_, _$templateCache_) {
      outerScope = $rootScope.$new();
      $compile = _$compile_;
      $templateCache = _$templateCache_;
    });

    $templateCache.put('directive/latest/latest.html', '<div></div>');
    element = $compile('<latest></latest>')(outerScope);
    outerScope.$digest();
    scope = element.isolateScope();
  });

  it('should have tests');
  
});