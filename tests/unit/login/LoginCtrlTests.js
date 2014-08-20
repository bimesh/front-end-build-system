'use strict';

describe('Login: Controller: LoginCtrl', function () {
  var Ctrl, scope, rootScope;

  beforeEach(module('sample.login'));

  beforeEach(inject(function ($controller, $rootScope) {
    rootScope = $rootScope.$new();
    scope = rootScope.$new();

    spyOn(rootScope, '$broadcast');

    Ctrl = $controller('LoginCtrl', {
      $scope: scope,
      $rootScope: rootScope
    });
  }));

  it('should exist', function () {
    expect(Ctrl).toBeDefined();
  });

  it('should have empty login info', function () {
    expect(scope.loginInfo).toBeDefined();
    expect(scope.loginInfo.username).toEqual('');
    expect(scope.loginInfo.password).toEqual('');
  });

  it('should default the user to not authenticated', function () {
    expect(scope.userAuthenticated).toBeFalsy();
  });

  describe('login with bad credentials', function () {
    var loginCredentials;

    beforeEach(function () {
      loginCredentials = {
        username: 'test@test.com',
        password: 'bad-pass'
      };
    });

    it('should not authenticate the user', function () {
      scope.login(loginCredentials);
      expect(scope.userAuthenticated).toBeFalsy();
    });

    it('should broadcast an error message', function () {
      scope.login(loginCredentials);
      expect(rootScope.$broadcast).toHaveBeenCalledWith('message:error', { message: 'Invalid Password!'});
    });
  });

  describe('login with good credentials', function () {
    var loginCredentials;

    beforeEach(function () {
      loginCredentials = {
        username: 'test@test.com',
        password: 'password'
      };
    });

    it('should authenticate the user', function () {
      scope.login(loginCredentials);
      expect(scope.userAuthenticated).toBeTruthy();
    });

    /*
     We use events to decouple the consumer and the producers in our system.
     we pass the event an explicit object so the contract is clearly defined.
     We use tests to ensure this contract is not broken.
     */
    it('should broadcast user logged in event', function () {
      scope.login(loginCredentials);
      expect(rootScope.$broadcast).toHaveBeenCalledWith('user:logged-in', {
        userId: jasmine.any(Number),
        username: loginCredentials.username
      });
    });
  });

  describe('logout', function () {
    it('should set the user as not authenticated', function () {
      scope.userAuthenticated = true;
      scope.$emit('user:logout');
      expect(scope.userAuthenticated).toBeFalsy();
    });

    it('should clear the previous auth credentials', function () {
      scope.loginInfo.username = 'old-username';
      scope.loginInfo.password = 'old-password';

      scope.$emit('user:logout');
      expect(scope.loginInfo.username).toEqual('');
      expect(scope.loginInfo.password).toEqual('');
    });
  });
});
