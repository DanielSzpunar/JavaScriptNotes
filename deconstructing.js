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
const info = `name: ${name} age: ${age} sex: ${sex}`;
document.getElementById('welcome').innerHTML = info;
