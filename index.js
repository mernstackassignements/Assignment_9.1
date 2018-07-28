/// Javascript code 

// Js Object
function createObject () {
   this.Name = 'bala';
   this.Height = 180;
   this.AboutYourSelf = function(){
       return 'I am ' + this.Name + '. I am ' +this.Height +' cm height'; 
   }
}

var me = new createObject();
console.log(me.AboutYourSelf());
