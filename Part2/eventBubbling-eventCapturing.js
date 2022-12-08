//  event bubbling/event propogation
//event capturing




//event bubbling : when we have eventListener on the child and the same event listener on the parent than if we clicked
// on child than all the same parent event listenres will be triggred.
console.log("hello world");

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//we are not capturing here this is bubbling

//if we clicked on this child o/p will be :   You clicked on child    
// child.addEventListener("click", () => {
//     console.log("You clicked on child");
// })

// //if clicked on this parent o/p will be :   you clicked on parent    You Clicked on grandparent 
// parent.addEventListener("click", () => {
//     console.log("you clicked on parent");
// })

// //if clicked on this grandparent o/p will be :  You Clicked on grandparent 
// grandparent.addEventListener("click", () => {
//     console.log("You Clicked on grandparent")
// })





// //event capturing : we are capturing event by passing the 3rd argument as true in the callback function

// //if we clicked on this child o/p will be :   capture !!! grandparent capture !!! parent capture !!! child
// child.addEventListener("click", () => {
//     console.log("capture !!! child");
// }, true)

// //if clicked on this parent o/p will be :    capture !!! grandparent    capture !!! parent
// parent.addEventListener("click", () => {
//     console.log("capture !!! parent");
// }, true)

// //if we clicked on this grandparent o/p will be:  capture !!! grandparent
// grandparent.addEventListener("click", () => {
//     console.log("capture !!! grandparent")
// }, true)


//execution will be capturing first than bubbling

//example if we clicked on child than
//o/p will be :

// capture !!! grandparent
//  capture !!! parent
//  capture !!! child
//   You clicked on child
// you clicked on parent
//  You Clicked on grandparent



//event delegation : the parent event will be triggered even if we clicked on the child


grandparent.addEventListener("click",(e)=>{
console.log(e)
})

