'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){

  var scope;
  var subjectController;

  beforeEach(function() {
    module('myApp.controllers');
    inject(function($controller, $rootScope, reportService) {
      scope = $rootScope.$new();
      subjectController = $controller('SubjectController', {$scope: scope, reportService: reportService});
    });
  });

  it('test', function() {
    expect(scope.averageOk).toBe(false);
    scope.newMark = '12';
    scope.addMarkHandler();
    scope.$apply();
    expect(scope.averageOk).toBe(true);
  });

});
