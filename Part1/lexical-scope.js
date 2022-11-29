//function inside functions. we can declare functions inside functions

function app() {
  const myVar = 15;
  function sumOfNumbers() {
    // const myVar = 10;
    console.log(2 + 3);
    //if myVar is not present in the sumOfNumbers function than myVar of app function is considered. this
    // called lexical scope
    // console.log(myVar);  //10
    console.log(myVar); //15

    const hi = () => {
      console.log("hey", myVar); //hey 15
    };
    hi();
  }

  const multiple = (a, b) => a * b;
  console.log("from app", myVar); // from app 15
  sumOfNumbers();
  console.log(multiple(4, 3));  //12
}

app();
