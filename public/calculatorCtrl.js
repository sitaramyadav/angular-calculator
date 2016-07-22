(function () {
    var app = angular.module('calculator',[]);

    app.controller('calculatorCtrl', ['$scope', function($scope) {
        $scope.greeting = 'Hola!';
    }]);


})(window.angular);
