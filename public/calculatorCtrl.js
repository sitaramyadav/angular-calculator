var app = angular.module('calculator', []);
app.controller('calculatorCtrl', function($scope) {
  $scope.currentValue = 1;
  $scope.prevResult=0;
  $scope.calculatedValue = function(btn){
    if(isFinite(btn))
    $scope.currentValue +=""+btn;
    console.log('============',$scope.currentValue);
  }
  $scope.add = function(){
    $scope.prevResult = parseFloat($scope.currentValue)+parseFloat($scope.prevResult);
  }
  $scope.subtract=function(){
    $scope.prevResult =parseFloat($scope.prevResult)-parseFloat($scope.currentValue);
  }
  $scope.clear = function(){
    $scope.prevResult = 0;
  }
  $scope.calculate = function(){
      $scope.prevResult;
  }

});
