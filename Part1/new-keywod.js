//new Keyword
//1) creates empty object. this={}
//2) returns that object
//3) automatically assign proto. which was done by using object2.createUser(object1)
// function createUser(firstName, age) {
//   this.firstName = firstName;
//   this.age = age;
// }

// createUser.prototype.about = function () {
//   return `${this.firstName} is ${this.age} years old`;
// };

// const user1 = new createUser("shankar", 20);
// console.log(user1);
// console.log(user1.about()); //shankar is 20 years old

//more improvision using new keyword

function CreateUser(firstName, lastName, email, age, address) {
  this["firstName"] = firstName;
  this["lastName"] = lastName;
  this["email"] = email;
  this["age"] = age;
  this["address"] = address;
}

CreateUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old`;
};

CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};

CreateUser.prototype.sing = function () {
  return `${this.firstName} can sing`;
};
const user1 = new CreateUser(
  "Shankar",
  "Bhavani",
  "bhavanishankargopu999@gmail.com",
  22,
  ["RPG", "VPD"]
);
console.log(user1.about()); //Shankar is 22 years old
const user2 = new CreateUser("Sha", "Bha", "bhavani@gmail.com", 2, [
  "RPG",
  "VPD",
]);
console.log(user2.sing()); //Sha can sing
console.log(user2.is18()); //false

//Has-own property
// for (let key in user1) {
//   console.log(key); ////firstName, lastName, email, age, adrress, about , sing , is18
//Here I am getting prototype methods also wich I don't need
// }

//so we can use hasownProperty to get the keys of that object only

for(let key in user1)
{
  if(user1.hasOwnProperty(key))
  {  
    console.log(key)    //firstName, lastName, email, age, adrress
  }
}


//The more improvisation of this can be done with the class. refer class.js for the next 