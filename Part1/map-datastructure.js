//duplicate keys are not allowed like objects.

//objects can only have string or symbol as key

//stores in ordered fashion

//in map we can use anything as key like arrays, numbers ,string

// const person1 = {
//   firstName: "shankar",
//   age: 22,
//   1: "one",
// };

// for(let value in person1)
// {
//     console.log(person1[value])
// }

// // console.log(person.firstName);
// // console.log(person["age"]);

// for(let key in person)
// {
//     console.log(key, typeof key)  // 1 string firstName string age string    (every key considered as string here)
// }

//map : in map key can be any type
// const person = new Map();
// person.set("firstName", "shankar");
// person.set("age", 22);
// person.set(1, "one");
// person.set([1, 2, 3], "onetwothree"); //we can use array as key as well
// person.set({ 1: "one" }, "one"); //we can use one object as key as well
// console.log(person); //'firstName' => 'shankar',   'age' => 22,    1 => 'one', [ 1, 2, 3 ] => 'onetwothree',  { '1': 'one' } => 'one'}

// //accessing values from map : we will use .get() method with map to access values

// console.log(person.get(1));
// console.log(person.keys()); // [Map Iterator] { 'firstName', 'age', 1, [ 1, 2, 3 ], { '1': 'one' } }

// //By using this Keys method we can loop over map

// // for (let value of person.keys()) {
// //   console.log(person.get(value), typeof value); //shankar string 22 string one number
// //   //here we can check that 1 key is considered as number instead of string
// // }

// //we can directly use for of loop
// for (let value of person) {
//   console.log(value); //[ 'firstName', 'shankar' ]
//   //   [ 'age', 22 ]
//   //   [ 1, 'one' ] [ [ 1, 2, 3 ], 'onetwothree' ] [ { '1': 'one' }, 'one' ]
//   //we will get like this in array's
// }

// for (let [key, value] of person) {
//   //destructuring of array
//   console.log(key);
//   console.log(value);
// }

//we can also add the entries in map like this
const person = new Map([
  ["firstName", "Bhavani"],
  ["age", 22],
]);
console.log(person); //Map(2) { 'firstName' => 'Bhavani', 'age' => 22 }

const person1 = {
  id: 1,
  firstName: "shankar",
};

const userInfo = new Map();
userInfo.set(person1, { age: 22, gender: "male" });
console.log(userInfo);
// Map(1) {
//     { id: 1, firstName: 'shankar' } => { age: 22, gender: 'male' }
//   }

console.log(person1.id) //1
console.log(userInfo.get(person1).age) //22
console.log(userInfo.get(person1).gender); //male
