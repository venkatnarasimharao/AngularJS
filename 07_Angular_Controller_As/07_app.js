//creation of module
var app=angular.module('NestedCtrlApp',[]);

//creation of controllers
app.controller('ParentNestedApp',function () {
    this.test='';
});

//creation of controller
app.controller('ChildCtrlApp',function () {
   // this.test='';  //if u comment this parent controller can be access in child but if u can't access child in parent
});

//if u use as controller that can be specific for that parent or child controller