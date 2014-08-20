'use strict';

describe('Navigation: Controller: HeaderCtrl', function () {
  var Ctrl, scope, MOCK_CONFIG;

  beforeEach(module('sample.navigation'));

  beforeEach(function () {
    MOCK_CONFIG = {
      CURRENT_VERSION: '0.1.2',
      PROJECT_NAME: 'Front End Build System'
    };
  });

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Ctrl = $controller('HeaderCtrl', {
      $scope: scope,
      CONFIG: MOCK_CONFIG
    });
  }));

  it('should exist', function () {
    expect(Ctrl).toBeDefined();
  });

  it('should map the current version to the scope', function () {
    expect(scope.CURRENT_VERSION).toEqual(MOCK_CONFIG.CURRENT_VERSION);
  });

  it('should map the project name to the scope', function () {
    expect(scope.PROJECT_NAME).toEqual(MOCK_CONFIG.PROJECT_NAME);
  });
});
