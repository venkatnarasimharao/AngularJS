angular.module('GDMNGApp',[]).controller('GDMNGAppCtrl',function() {
    this.username='';
    this.times=null;
    this.timesArray=[];
    this.getTimes=function() {
        if (this.times===null){
            this.timesArray=[];
        }
        else{
            this.timesArray=[];
            for(var i=0;i<this.times;i++){
                this.timesArray[i]=i;
            }
        }
    };

});