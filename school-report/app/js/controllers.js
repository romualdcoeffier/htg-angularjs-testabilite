'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services'])

  .controller('MyCtrl1', [function() {}])
  .controller('MyCtrl2', [function() {}])

  .controller('SubjectController', ['$scope', function ($scope) {

    $scope.subject = null; // directive attribute

    $scope.newMark = '';

    $scope.averageOk = false;

    $scope.$watch('subject.average', function() {
      $scope.averageOk = $scope.subject.average >= 10;
    });

    $scope.deleteMarkHandler = function(index) {
      $scope.subject.removeMark(index);
    }

    $scope.addMarkHandler = function() {
      $scope.subject.addMark(parseInt($scope.newMark));
      $scope.newMark = '';
    }

  }])

  .controller('ReportController', ["$scope", "reportService", function($scope, reportService) {

    $scope.subjects = reportService.createSampleReport();

  }])

;