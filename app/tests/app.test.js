'use strict';

describe('Application', function () {

  it('should call the logger with hello world', function () {
    spyOn(Automation.Logger, 'info');

    var app = new App();

    expect(Automation.Logger.info).toHaveBeenCalledWith('hello world');
  });
});
