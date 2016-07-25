var express = require('express');
var calculator = require('../public/calculatorCtrl.js');
var assert=require('chai').assert;
describe('calculator behaviour', function() {
  beforeEach(module('calculator'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.add', function() {
    it('calculate the result and sets the prevResult ', function() {
      var $scope = {};
      var controller = $controller('calculator', { $scope: $scope });
      $scope.prevResult = 12;
      $scope.currentValue = 8;
      $scope.add();
      expect($scope.prevResult).toEqual(20);
    });
  });
});
