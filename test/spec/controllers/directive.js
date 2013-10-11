'use strict';

describe('Controller: DirectiveCtrl', function () {

  // load the controller's module
  beforeEach(module('newticApp'));

  var DirectiveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DirectiveCtrl = $controller('DirectiveCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
