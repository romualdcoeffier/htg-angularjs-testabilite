'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services'])

  .controller('MyCtrl1', [function() {}])
  .controller('MyCtrl2', [function() {}])

  .controller('SubjectController', ['$scope', 'reportService', function ($scope, reportService) {

    $scope.subject = reportService.createSampleSubject();

  }])

;