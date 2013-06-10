'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');


var averageService = {
  calculateAverage: function(marks) {
    var markCount =  marks.length;
    if (markCount == 0) return null;
    var average = 0;
    angular.forEach(marks, function(mark) {average += mark});
    average = average / markCount;
    return average;
  }
};


function Subject(name) {
  this.name = name;
  this.marks = [];
  this.average = null;
  this.comments = '';
}

Subject.prototype.addMark = function(mark) {
  if (! (mark >= 0 && mark <= 20)) return;
  this.marks.push(mark);
  this.updateAverage();
}

Subject.prototype.removeMark= function(index) {
  this.marks.splice(index, 1);
  if (this.marks.length > 0) {
    this.updateAverage();
  }
  else {
    this.average = null;
  }
}

Subject.prototype.updateAverage = function() {
  this.average = averageService.calculateAverage(this.marks);
}

var reportService = {

  createSubject: function(name) {
    return new Subject(name);
  },

  createSampleSubject: function() {
    var subject = new Subject("Maths");
    subject.addMark(14);
    subject.addMark(10);
    subject.addMark(12);
    subject.comments = 'Bien';
    return subject;
  },

  createSampleReport: function() {
    var report = [];
    report.push(this.createSampleSubject());
    var subject = new Subject("Physique");
    subject.addMark(5);
    subject.addMark(8);
    subject.comments = 'Pas bien';
    report.push(subject);
    return report;
  }

}