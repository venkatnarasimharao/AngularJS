angular.module('GroceryListApp',[]).controller('GroceryAppctrl',function() {
    this.item='';
    this.groceryList=[];
    this.editmode=false;
    this.addItem=function (item) {
        if(this.item===''){
            alert('!Dude write something in add list ');
        }
        else{
            if(!(this.groceryList.indexOf(item) === -1)){
                alert("Dude!! The " + item + " Exists Already");
                this.item = '';
            }
            else{
                this.groceryList.push(item);
                this.item='';
            }
        }
    };
    this.enableeditmode=function() {
        this.editmode=true;
    };
    this.disableeditmode=function() {
        this.editmode=false;
    };
    this.deleteItems=function(index) {
      this.groceryList.splice(index,1);
    };
});