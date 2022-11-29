// //class keyword
// //class are fake

// // function CreateUser(firstName, lastName, age, address) {
// //   (this.firstName = firstName),
// //     (this.lastName = lastName),
// //     (this.age = age),
// //     (this.address = address);
// // }
// // CreateUser.prototype.about = function () {
// //   return `${this.firstName} is a good guy`;
// // };
// // const user1 = new CreateUser("shankar", "bhavani", 22, "RPG, VPD");
// // console.log(user1);
// // console.log(user1.about()); //shankar is a good guy

// //same thing with class

// class CreateUser {
//   constructor(firstName, lastName, age, address) {
//     console.log('constructor is called');
//     (this.firstName = firstName),
//       (this.lastName = lastName),
//       (this.age = age),
//       (this.address = address);
//   }
//   about() {
//     return `${this.firstName} is ${this.age} years old`;
//   }
//   is18() {
//     return this.age >= 18;
//   }
//   sing() {
//     return "LA LA LA LA ........";
//   }
// }

// //we always need to use new keyword. Class constructor CreateUser cannot be invoked without 'new'
// const user1 =  new CreateUser("shankar", "bhavani", 22, "RPG, VPD");
// const user2 =  new CreateUser("bhavani", "shankar", 2, "RPG, VPD");
// console.log(user1);
// console.log(user1.sing());
// console.log(user2.is18());
// console.log(Object.getPrototypeOf(user1));

class Animal {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  eat() {
    return `The ${this.name} is eating`;
  }
  Isage1Above() {
    return this.age > 1;
  }
  isCute() {
    return true;
  }
}

// const elephant = new Animal("elephant", 7);
// const cow = new Animal("cow", 1);
// console.log(elephant);
// console.log(cow);
// console.log(cow.Isage1Above());
// console.log(elephant.eat());
// console.log(elephant.isCute());
// console.log(cow.isCute());

//Inheritance : This is the technique to use the properties present in the parent class. Here we will use keyword
//extends to extend the parent class

//when dog class extends the Animal class , the whole properties and methods of Animal class can be accessble in
//Dog class

//suppose we want to use new properties to the Dog class apart from the properties present in the Animal class
//than we can declare them in The Dog class and by using super() we can use the Animal class properties as well
class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age); //like this we can declare the super() the name,age we can use of the Animal class
    this.speed = speed;
  }

  eat() {
    return `Modified Eat : The ${this.name} is eating`;
  }
  run() {
    return `${this.name}  can run at ${this.speed} km/hr`;
  }
}

const tommy = new Dog("tommy", 3, 45);
console.log(tommy);
console.log(tommy.eat()); //Modified Eat : The tommy is eating
console.log(tommy.run()); //tommy  can run at 45 km/hr
