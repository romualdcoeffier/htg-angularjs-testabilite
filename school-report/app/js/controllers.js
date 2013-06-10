'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services'])

  .controller('MyCtrl1', [function() {}])
  .controller('MyCtrl2', [function() {}])

  .controller('SubjectController', ['$scope', 'reportService', function ($scope, reportService) {

    $scope.subject = reportService.createSampleSubject();

    $scope.newMark = '';

    $scope.deleteMarkHandler = function(index) {
      $scope.subject.removeMark(index);
    }

    $scope.addMarkHandler = function() {
      $scope.subject.addMark(parseInt($scope.newMark));
      $scope.newMark = '';
    }

  }])

;