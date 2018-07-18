//creation of controller and module
angular.module('CalculatorApp',[]).controller('CalculatorCtrl',function() {
 this.firstNumber='';
 this.secondNumber='';
 this.Operator='+';
 this.Result='result';
    //to change button operator
    this.changeOperator=function (opr) {
        this.Operator=opr.trim();
    };
    this.fetchResult=function() {
        this.firstnumber=parseFloat(this.firstNumber);
        this.secondnumber=parseFloat(this.secondNumber);
        switch (this.Operator){
            case '+':
                this.Result=this.firstnumber+this.secondnumber;
                break;
            case '-':
                this.Result=this.firstnumber-this.secondnumber;
                break;
            case '*':
                this.Result=this.firstnumber*this.secondnumber;
                break;
            case '/':
                this.Result=this.firstnumber/this.secondnumber;
                break;
            default:
                this.Result='result';
                break;
        }
    };
    this.clearAll=function() {
        this.firstNumber='';
        this.secondNumber='';
        this.Operator='+';
        this.Result='result';
    }
});