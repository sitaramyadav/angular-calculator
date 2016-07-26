var app = angular.module('calculator', []);
app.controller('calculatorCtrl', function($scope) {
  $scope.currentValue = 0;
  $scope.prevResult = 0;
  $scope.result = 0;
  $scope.operation;
  $scope.calculatedValue = function(btn){
    console.log(!isFinite(btn));
    if(!(isFinite(btn)) && btn != '.'){
      $scope.operation = btn;
    }
      $scope.prevResult =''+$scope.prevResult+btn;
  }
  var getResult = function(firstNumber,operation,secondNumber){
    let result = 0;
    switch (operation) {
      case '+':return firstNumber + secondNumber;
        break;
      case '-':result = firstNumber - secondNumber;
          break;
      case '*':result = firstNumber * secondNumber;
          break;
      case '/':result = firstNumber / secondNumber;
            break;
      default:result = '';
    }
    return result;
  }
    $scope.calculate = function(){
      let result = $scope.prevResult.split($scope.operation);

      $scope.result = getResult(Number(result[0]),$scope.operation, Number(result[1]));
      $scope.prevResult = $scope.result;

    }
  $scope.clear = function(){
    $scope.result = 0;
    $scope.prevResult = 0;
  }
});
