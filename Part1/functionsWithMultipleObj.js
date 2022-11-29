// const user1 = {
//   firstName: "shankar",
//   lastName: "Bhavani",
//   email: "bhavani.shankar@quantiphi.com",
//   age: 2,
//   address: "House Number , colony, pincode, state",
//   about() {
//     return `${this.firstName} is ${this.age} Years`;
//   },
//   is18() {
//     return this.age >= 18;
//   },
// };
// const res=user1.is18();
// console.log(res)

//If we want to create multiple objects than we need to create different objects again and again which is tedious
//task
//let's create a function that creates objects

//function (that function create object)
//2.) add key value pair
//3.) return the object

//

// PROBLEM :In This process while we are creating multiple objects , we are calling the function in that function
//we have methods, so those methods will be called for every user creation eventhough they are doing the same
//work; so the memory will be wasted for storing the methods again and again for each user created

//we can create these methods sepearetly an we can store there refernces there in the object so it will
//overcome that problem

//Ex
// const userMethods = {
//   about: function () {
//     return `${this.firstName} is ${this.age} Years Old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

// function createUser(firstName, lastName, email, age, address) {
//   const user = {};
//   user["firstName"] = firstName;
//   user["lastName"] = lastName;
//   user["email"] = email;
//   user["age"] = age;
//   user["address"] = address;

//   user["about"] = userMethods.about; //we are just storing the another object's reference here
//   user["is18"] = userMethods.is18; //we are just storing the another object's reference here

//   return user;
// }

// const user1 = createUser(
//   "Shankar",
//   "Bhavani",
//   "bhavanishankargopu999@gmail.com",
//   22,
//   ["RPG", "VPD"]
// );
// const userAbout = user1.about();
// console.log(user1);
// console.log(userAbout); //Shankar is 22 Years Old

// const user2 = createUser("Sha", "Bha", "bhavani@gmail.com", 2, ["RPG", "VPD"]);
// console.log(user2);

//PROBLEM : suppose if some user wants one more method than we need to create that method in the userMethods object
//and again we need to store that refernce in the function, if we forgot to do that than results will vary.

//solution : we can use object.create method to have empty object created and the reference of another object

//ex:

const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} Years Old`;
  },
  is18: function () {
    return this.age >= 18;
  },
  sing: function () {
    return `${this.firstName} can sing `;
  },
};

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(userMethods); //here we have refernce of all the values of userMethods
  user["firstName"] = firstName;
  user["lastName"] = lastName;
  user["email"] = email;
  user["age"] = age;
  user["address"] = address;

  return user;
}

const user1 = createUser(
  "Shankar",
  "Bhavani",
  "bhavanishankargopu999@gmail.com",
  22,
  ["RPG", "VPD"]
);
const userAbout = user1.about();
console.log(userAbout); //Shankar is 22 Years Old [although we don't have about method in function we are getting this from userMethods refernce]
console.log(user1.__proto__); //{about: [Function: about],is18: [Function: is18],sing: [Function: sing]}
// console.log(userAbout); //Shankar is 22 Years Old

const user2 = createUser("Sha", "Bha", "bhavani@gmail.com", 2, ["RPG", "VPD"]);
console.log(user2.sing());  //Sha can sing



//For more optimization of this look into prototype.js file
