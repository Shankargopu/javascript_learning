// const user1 = {
//   firstName: "shankar",
//   age: 22,
//   about: () => {
//     console.log(this); //it gives window object
//     console.log(this.firstName, this.age);
//   },
// };

// user1.about(); //undefined undefined

// //NOTE : in arraow functions this will take once step forwared value, here it takes window object in this
// //that's why we are geting undefined

//short-syntax
const user1 = {
  firstName: "shankar",
  age: 22,
  about() {
    console.log(this.firstName, this.age);
  },
};

user1.about(); //shankar 22
