//creation of module
var app= angular.module('clockapp',[]);

//creation of controller
app.controller('ClockappCtrl',function($scope,$interval) {
    function indianDate() {
        var today= new Date();
        var options= {timeZone: 'Asia/Kolkata'};
        $scope.indiaTime= today.toLocaleTimeString('en-US',options);
        $scope.indianDate=today.toLocaleDateString('en-US',options);
    }
    $interval(indianDate,1000);

    function USDate() {
        var today= new Date();
        var options= {timeZone: 'America/New_York'};
        $scope.USTime= today.toLocaleTimeString('en-US',options);
        $scope.USDate=today.toLocaleDateString('en-US',options);
    }
    $interval(USDate,1000);

    function ChinaDate() {
        var today= new Date();
        var options= {timeZone: 'Asia/Shanghai'};
        $scope.chinaTime= today.toLocaleTimeString('en-US',options);
        $scope.chinaDate=today.toLocaleDateString('en-US',options);
    }
    $interval(ChinaDate,1000);
});