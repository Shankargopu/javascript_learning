//lexical environment . scope chain

const lastName = "shankar";

function printName() {
  const firstName = "bhavani";
  console.log(firstName);
  console.log(lastName);
}
printName();
