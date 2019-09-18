console.log("Test Connection");
let user = {
  name: 'Dan',
  age: 37,
  sex: 'm'
}
/*
This is the old way of plucking data from an object:

let name = user.name;
let age = user.age;
let sex = user.sex;
*/

/*The new way to pluck data from an object is Object
Destructuring: */
let {name, age, sex} = user;
//This one line of code has replaced the above 3 lines of code [line 10-12]
const info = `name: ${name}\n age: ${age}\n sex: ${sex}`;
document.getElementById('welcome').innerHTML = info;

//Array destructuring:

var user1 = ['daniel', '@danielszpunar', 'Missisauga, Ontario'];
var [name1, handle1, location1] = user1;


/*Shorthand property and Method Names: below we notice that the key and value in the 
formatMessage function are the same. Therefore we can do as follows for shorthand: 
function formatMessage (name, id, avatar) {
  return {
    name: name,
    id: id,
    avatar: avatar,
    timestamp: Date.now(),
    save: function() {
      console.log('saved')
    }
  }
}

Which is essentially just remove the key. Look at what we did to the save function as well
*/
function formatMessage (name, id, avatar) {
  return {
    name,
    id,
    avatar,
    timestamp: Date.now(),
    save() {
      console.log('saved');
    }
  }
}
let john = formatMessage('dan', 909090, 'me');
console.log(john.name);
john.save();