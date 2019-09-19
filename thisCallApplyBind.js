//This:

//Implicit Binding:
//Most common when finding 'this' keyword.
//Left of the 'dot' at call time  eg. left.name left is this...

var me = {
  name: 'Daniel',
  age: 27,
  sayName: function() {
    console.log(this.name);
  },
  sayAge: function() {console.log(this.age)}
}

/*Another Example*/
 var sayNameMixin = function(obj) {
   obj.sayName = function(){
     console.log(this.name);
   };
 };
var person1 = {
  name: 'Daniel',
  age: 37
}
var person2 = {
  name: 'Songyi',
  age: 28
}
sayNameMixin(person1)
sayNameMixin(person2)
person1.sayName();
person2.sayName();

//Explicit Binding:

//new Binding:

//Window Binding: