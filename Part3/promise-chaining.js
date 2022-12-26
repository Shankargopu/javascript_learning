

// .then() will always return promise. so we can also excute than using .then() and .then() and so on..

//it will make promise chaining.

//ex:

// function myPromise(){

//     return new Promise((resolve,reject)=>{
//         resolve("foo");
//     })
// }

// myPromise().then((value)=>{
//     value+= "bar";
//     return value;
// }).then((value)=>{
//     value+="baaz";
//     return value                     //return Promise.resolve(value)
// }).then((value)=>{
//    console.log(value)  //foobarbaaz
// })






const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")

//using promise-chaining we can reduce the callback hell.


function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = text;
                element.style.color = color;
                resolve();
            }
            else {
                reject("element not found");
            }
        }, time)

    })
}

changeText(heading1, "one", "yellow", 1000)
    .then(() => changeText(heading2, "two", "blue", 1000))
    .then(() => changeText(heading3, "three", "violet", 1000))
    .then(() => changeText(heading4, "four", "purple", 4000))
    .then(() => changeText(heading5, "five", "black", 1000))
    .then(() => changeText(heading6, "six", "orange", 1000))
    .then(() => changeText(heading7, "seven", "indigo", 4000))
    .catch((err)=>console.log(err))

