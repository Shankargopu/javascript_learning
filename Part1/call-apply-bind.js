// //call
// const user1 = {
//   firstName: "Bhavani",
//   age: 22,
//   about: function (hobby, favMusician) {
//     console.log(this.firstName, this.age, hobby,favMusician);
//   },
// };

// const user2 = {
//   firstName: "Shankar",
//   age: 12,
// };

// user1.about(); // Bhavani 22 undefined undefined
// user1.about.call(); //undefined undefined
// user1.about.call(user2,"dancing","Anirudh"); //  Shankar 12 dancing Anirudh   we can pass extra params like this

// //In the call method we can pass the object so that the method will take that object values in this keyword

//call

function about(hobby, favMusician) {
  console.log(this.firstName, this.age, hobby, favMusician);
}

const user1 = {
  firstName: "Bhavani",
  age: 22,
};

const user2 = {
  firstName: "Shankar",
  age: 12,
};

about(); // undefined undefined undefined undefined
about.call(user1); //Bhavani 22 undefined undefined
about.call(user2, "dancing", "Anirudh"); //  Shankar 12 dancing Anirudh   we can pass extra params like this

//In the call method we can pass the object so that the method will take that object values in this keyword

//apply
//apply also works same as call but just need to pass arguments in [] braces

//ex:

about.apply(user1, ["reading", "theman"]); //Bhavani 22 reading theman

//bind : This returns the function and we can store that in one varaible and we can call when ever is needed

const func = about.bind(user1, "cricket", "DSP");
func(); //Bhavani 22 cricket DSP

const x = {
  name: "abc",
  age: 21,
  about: function () {
    console.log(this.name, this.age);
  },
};

const fun = x.about.bind(x);
fun(); //abc 21
