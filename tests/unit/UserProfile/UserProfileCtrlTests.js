'use strict';

describe('User Profile: Controller: UserProfileCtrl', function () {
  var Ctrl, scope, rootScope;

  beforeEach(module('sample.userProfile'));

  beforeEach(inject(function ($controller, $rootScope) {
    rootScope = $rootScope.$new();
    scope = rootScope.$new();

    spyOn(rootScope, '$broadcast');

    Ctrl = $controller('UserProfileCtrl', {
      $scope: scope,
      $rootScope: rootScope
    });
  }));

  it('should exist', function () {
    expect(Ctrl).toBeDefined();
  });

  describe('when a user is logged in', function () {
    /*
     The user profile controller does not care how the user logs in, only that the user has logged in.
     we expect the event to provide us an explicit object so the contract is clearly defined.
     We write unit tests on the receiving end of the event of the event to ensure the contract is not broken.
     */

    var eventData = {username: 'bob@john.com', userId: 6};

    it('should set the user details', function () {
      scope.$emit('user:logged-in', eventData);
      expect(scope.userInfo.username).toEqual(eventData.username);
      expect(scope.userInfo.userId).toEqual(eventData.userId);
    });
  });

  describe('when a user logs out', function () {
    beforeEach(function() {
      scope.userInfo = {
        userId: '2',
        username: 'test-user-name'
      };
    });

    it('should broadcast an event', function () {
      var userId = scope.userInfo.userId;
      scope.logout();
      expect(rootScope.$broadcast).toHaveBeenCalledWith('user:logout', {
        userId: userId
      });
    });

    it('should clear the user details', function () {
      scope.$emit('user:logout');
      expect(scope.userInfo).toBeNull();
    });
  });
});
