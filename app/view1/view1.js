'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
var vm = this;
vm.month="toew";
}]);

angular.module('myApp.view1', [])
.controller('DemoController', function() {
  var vm =this;
  vm.month= "nov"; 
  vm.currentMonth = new Date();
  vm.options = [
    { label: 'P', value: 1 },
    { label: 'H', value: 0 },
     { label: 'V', value: 0 },
    { label: 'M', value: 0 },
      { label: '-', value: 0 }
  ];
  vm.currentlySelected = vm.options[0];
    
    $scope.logResult = function() {
         console.log(vm.currentlySelected);   
    }
})
angular.module('myApp',[]);

function MyCtrl($scope) {
   function GetDates(startDate, daysToAdd) {
        var aryDates = [];
        $scope.set = false;
        for(var i = 0; i <= daysToAdd; i++) {
            var currentDate = new Date();
            $scope.currentMonth= MonthAsString(currentDate.getMonth());
            currentDate.setDate(startDate.getDate() + i);
            $scope.newMonth= MonthAsString(currentDate.getMonth());
            if($scope.newMonth != $scope.currentMonth){
                console.log( $scope.newMonth);
                $scope.set = true;
            }
           
            aryDates.push(DayAsString(currentDate.getDay()) + " " + currentDate.getDate() + " " );
        }

        return aryDates;
    }

    function MonthAsString(monthIndex) {
        var d=new Date();
        var month=new Array();
        month[0]="Jan";
        month[1]="Feb";
        month[2]="March";
        month[3]="April";
        month[4]="May";
        month[5]="June";
        month[6]="July";
        month[7]="Aug";
        month[8]="Sep";
        month[9]="Oct";
        month[10]="Nov";
        month[11]="Dec";

        return month[monthIndex];
    }

    function DayAsString(dayIndex) {
        var weekdays = new Array(7);
        weekdays[0] = "SUN";
        weekdays[1] = "MON";
        weekdays[2] = "TUE";
        weekdays[3] = "WED";
        weekdays[4] = "THU";
        weekdays[5] = "FRI ";
        weekdays[6] = "SAT";

        return weekdays[dayIndex];
    }

    var startDate = new Date();
    var aryDates = GetDates(startDate, 7);
    console.log(aryDates);
    $scope.totalDays = aryDates;

}