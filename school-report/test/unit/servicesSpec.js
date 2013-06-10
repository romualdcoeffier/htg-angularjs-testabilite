'use strict';

/* jasmine specs for services go here */

describe('service', function() {

  beforeEach(module('myApp.services'));

  describe('version', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });

  describe('average', function(averageService) {

    it('should return null when no mark', inject(function(averageService) {
      expect(averageService.calculateAverage([])).toEqual(null);
    }));

    it('should return 15 when marks are 15', inject(function(averageService) {
      expect(averageService.calculateAverage([15])).toEqual(15);
    }));

    it('should return 12 when marks are 14, 10, 12', inject(function(averageService) {
      expect(averageService.calculateAverage([14, 10, 12])).toEqual(12);
    }));

  });

  describe('subject', function() {

    it('test subject after creation', inject(function(reportService) {
      var subject = reportService.createSubject('aSubjectName');
      expect(subject.name).toEqual('aSubjectName');
      expect(subject.marks).toEqual([]);
      expect(subject.average).toEqual(null);
      expect(subject.comments).toEqual('');
    }));

    it('test add/remove marks to subject', inject(function(reportService) {
      var subject = reportService.createSubject('aSubjectName');

      subject.addMark(10);
      expect(subject.marks).toEqual([10]);
      expect(subject.average).toEqual(10);

      subject.addMark(12);
      expect(subject.marks).toEqual([10, 12]);
      expect(subject.average).toEqual(11);

      subject.removeMark(0);
      expect(subject.marks).toEqual([12]);
      expect(subject.average).toEqual(12);

      subject.removeMark(0);
      expect(subject.marks).toEqual([]);
      expect(subject.average).toEqual(null);
    }));

  });

});
