const person1 = {
  name: "shankar",
  age: 20,
  "person Hobbies": ["cricket", "watching series", "listening music"], //As js not allow spaces we need to declare the spaced property in ""
};

//for in loop it can be used to iterate object

for (let key in person1) {
  console.log(`${key}: ${person1[key]}`);
}

//object.keys return the Array keys i.e, properties

console.log(Object.keys(person1));

//so we can use for of loop here.

for (let key of Object.keys(person1)) {
  console.log(person1[key]);
}

const key1 = "objKey1";
const key2 = "objkey2";

const value1 = "objValue1";
const value2 = "objValue2";

const obj = {
  [key1]: value1,    //we need to use this bracket notation to assign varaible value of Key1
  [key2]: value2,
};

console.log(obj);
