//creation of Angular module
var app=angular.module('NestedCtrlApp',[]);

//creation of parent controller
app.controller('parentCtrl',function ($scope) {
   $scope.test='';
});

//creation of child controller
app.controller('childCrtl',function ($scope) {
 // $scope.test='';   //if u comment this parent controller can be access in child but if u can't access child in parent
});