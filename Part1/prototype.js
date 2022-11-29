// function hello() {
//   console.log("Hello world");
// }

// //javascript function ===> function + object

// console.log(hello.name);

// //we can add our own properties to functions like objects

// hello.OwnProperty = "A unique property";
// console.log(hello.OwnProperty);

// //function has property called property which provides free object  to add our own properties to the
// //exisiting function

// console.log(hello.prototype); //{}

// hello.prototype.a = "a";

// console.log(hello.prototype); //{ a: 'a' }

// hello.prototype.sing = function ()
// {
//     return `La La La La`
// }

// console.log(hello.prototype.sing())    //La La La La

//Instead of mainitining one extra object for user Methods we can use this prototype property exists on function

//and we can link those methods using Object.create(function.prototype)

// const userMethods = {
//   about: function () {
//     return `${this.firstName} is ${this.age} Years Old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
//   sing: function () {
//     return `${this.firstName} can sing `;
//   },
// };

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype); //here we have refernce of all the values of create.prototype methods
  user["firstName"] = firstName;
  user["lastName"] = lastName;
  user["email"] = email;
  user["age"] = age;
  user["address"] = address;

  return user;
}

createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old`;
};

createUser.prototype.is18 = function () {
  return this.age >= 18;
};

createUser.prototype.sing = function () {
  return `${this.firstName} can sing`;
};
const user1 = createUser(
  "Shankar",
  "Bhavani",
  "bhavanishankargopu999@gmail.com",
  22,
  ["RPG", "VPD"]
);
console.log(user1.about()); //Shankar is 22 years old
const user2 = createUser("Sha", "Bha", "bhavani@gmail.com", 2, ["RPG", "VPD"]);
console.log(user2.sing()); //Sha can sing

const numArray =[1, 2, 3, 4];
// console.log(Array.prototype)  //here we will get all array methods

console.log(Object.getPrototypeOf(numArray));  //we can do like this as well
//More improvisation of this can be found in new-keyword.js file
