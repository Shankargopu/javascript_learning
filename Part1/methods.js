//methods
//function inside object

// const person = {
//   firstName: "sh",
//   age: 22,
//   about: function () {
//     console.log(`person's first name is shankar and age is 22`);
//   },
// };

// person.about(); //person's first name is shankar and age is 22

//we don't need hardcode value in console log here. we need to print the name which is present in the parameters

//This Keyword:  it will get values at run time. what ever the object is calling the method than all the values of object
//present in the this keyword
// const person = {
//   firstName: "bhavani",
//   age: 21,
//   about: function () {
//     console.log(
//       `person's first name is ${this.firstName} and age is ${this.age}`
//     );
//     console.log(this); //{ firstName: 'bhavani', age: 21, about: [Function: about] }
//   },
// };

// person.about(); //person's first name is bhavani and age is 21

function personInfo() {
  console.log(`firstname is ${this.name} and the age is ${this.age}`);
}

const user1 = {
  name: "Bhavani",
  age: 22,
  Gender: "Male",
  about: personInfo,
};
const user2 = {
  name: "Raji",
  age: 22,
  Gender: "Female",
  about: personInfo,
};
const user3 = {
  name: "preetham",
  age: 23,
  Gender: "Male",
  about: personInfo,
};

user1.about(); //firstname is Bhavani and the age is 22
user2.about(); //firstname is Raji and the age is 22
user3.about(); //firstname is preetham and the age is 23

//so whatever the oject is called the about method than in that this keyword the oject will pass
