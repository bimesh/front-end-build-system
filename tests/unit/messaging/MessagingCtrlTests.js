'use strict';

describe('Messaging: Controller: MessagingCtrl', function () {
  var Ctrl, scope, $timeout;

  var eventData = {message: 'some-message'};

  beforeEach(module('sample.messaging'));

  beforeEach(inject(function($injector) {
    $timeout = $injector.get('$timeout');
    spyOn($timeout, 'cancel').andCallThrough();
  }));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    Ctrl = $controller('MessagingCtrl', {
      $scope: scope
    });
  }));

  it('should exist', function () {
    expect(Ctrl).toBeDefined();
  });

  it('should set the error message from the event', function () {
    scope.$emit('message:error', eventData);
    expect(scope.error.message).toEqual(eventData.message);
  });

  it('should clear the error message after some time', function () {
    scope.$emit('message:error', eventData);
    $timeout.flush();
    expect(scope.error).toBeNull();
  });

  it('should cancel the previous delay if it exists', function () {
    scope.$emit('message:error', eventData);
    scope.$emit('message:error', eventData);
    expect($timeout.cancel).toHaveBeenCalled();
  });
});
