describe('apiUrls', function () {

  var apiUrls;

  beforeEach(function () {
    module('ingr-web');
    inject(function (_apiUrls_) {
      apiUrls = _apiUrls_;
    });
  });

  xit('should have tests', function () {
    //expect(apiUrls.doSomething()).to.equal('something');
  });

});