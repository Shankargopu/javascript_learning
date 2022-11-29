//objects are refernce type, arrays are good but not sufficient for real world data

// objects dont have index, object stores key[property] value pairs.

// const person = {
//   name: "shankar",
//   age: 20,
//   Hobbies: ["cricket", "watching series", "listening music"],
// };

// console.log(typeof person);
// console.log(person);

// // accessing the elements of object. we can use . or [] based on req.

// console.log(person.name); //prints the name property of person obj;
// console.log(typeof person.age);

// console.log(person.Hobbies); //prints array.

// // how to add key value pairs to objects.

// person.gender = "Male"; // we can add the element like this. key:gender, value:male

// console.log(person);

// const person = {
//   name: "shankar",
//   age: 20,
//   Hobbies: ["cricket", "watching series", "listening music"],
// };

// //acccesing the elements using bracket [];

// console.log(person["Hobbies"]); // we will access the object property like this. need to use always use "" for property

const key = "email";
const person1 = {
  name: "shankar",
  age: 20,
  "person Hobbies": ["cricket", "watching series", "listening music"], //As js not allow spaces we need to declare the spaced property in ""
};

console.log(person1["person Hobbies"]); // we cannot access the person hobbies with . operator here, we need to use brakcet notation

// if I want to add the key variable as property to the person1 object.

person1.key = "shankar@gmail.com";

// console.log(person1); //It will add key:shankar@gmail.com to object. But we need to add email:shankar@gamil.com to obj.

//for that

person1[key]="shankar@gmail.com"; //It will take key variable value that is email and add email:shankargopu@gmail.com here
console.log(person1);

