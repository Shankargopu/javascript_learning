

function getTwoNumbersAndAddTwoNumbers(number1, number2, onSuccess, onFailure) {
    console.log(`The two numbers are ${number1}, ${number2}`);
    if (typeof number1 === "number" && typeof number2 === "number") {
        onSuccess(number1, number2);
    }
    else {
        onFailure(number1, number2);
    }
}


// function AddTwoNumbers(number1, number2) {

//     console.log(`The sum is ${number1 + number2}`);
// }

// function onFail(number1,number2){
//     console.log(`The type of number1 is ${typeof number1} DataType and the type of number2 is ${typeof number2} DataType. 
// Please pass two numbers as number data type to add them`)
// }






getTwoNumbersAndAddTwoNumbers(4, 5, (num1, num2) => {
    console.log(`sum is ${num1 + num2}`);
}, (num1, num2) => {
    console.log(`The type of number1 is ${typeof num1} DataType and the type of number2 is ${typeof num2} DataType. 
Please pass two numbers as number data type to add them`)
})