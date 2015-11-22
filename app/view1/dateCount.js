var dateCount = angular.module('dateCount', []);
function Main($scope){
  $scope.range = function(min, max, step){
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) input.push(i);
    return input;
  };
};

var date = angular.module('date',[]);
	functionCtrl($scope)

{
	$scope.date = new Date();
};