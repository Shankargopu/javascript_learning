//By using getters and setters we can use the methods as properties

class Person {
  constructor(firstName, lastName, age) {
    (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    (this.firstName = firstName), (this.lastName = lastName);
  }
}

const person1 = new Person("Bhavani", "Shankar", 21);
console.log(person1);
// console.log(person1.fullName());

console.log(person1.fullName); //Bhavani Shankar
//eventhough we are calling this as property, we are getting the full name because we have used the get before method
person1.fullName = "Shankar Gopu";
console.log(person1);


//we can have static methods and properties, we have to use class name to access them

class A{
constructor(){}

static eat(){
    console.log("eating")
}
static name="a"


run(){
    console.log('Running');
}
}

const objA= new A();
objA.run(); //running
// objA.eat(); //error : objA.eat is not a function
A.eat(); //eating

