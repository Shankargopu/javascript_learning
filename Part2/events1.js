
//In this we will do add the event listener to all the buttons at a time.

//we can do this with the help of `This` keyword
// const allButtons= document.querySelectorAll(".my-buttons button");
// console.log(allButtons);  //NodeList(3) [button#one, button#two, button#three]

// // for(let button of allButtons){
// //     button.addEventListener("click",function(){
// //          console.log(this.textContent)  //the button text will be logged based on the button
// //     })
// // }

// //we can also use for each
// allButtons.forEach((button)=>{
//     button.addEventListener("click",function(){    //don't use arrow function here this obj will take window obj
//         console.log(this.textContent)  //the button text will be logged based on the button
//    })

// })


// when we add eventListener.
//JS Engine --- It will execute Line by Line
// In browser along with JS Engine we will have extra features.
//browser---- js Engine + webApi

//so whenver browser knows that user performed the event
// 1)it will give callback function to the js engine.
// 2) along with callback funtion, browser will also give abouth the event information what happened.

//this event we will get in one object. 
// we can accept this event inside callback function.



//so by using eveent we can access the current element with event, even with using arrow functions.


const allButtons = document.querySelectorAll(".my-buttons button");
console.log(allButtons)

allButtons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
    //  console.log(e.target.textContent)  //it will the current element text
    console.log(e.currentTarget)   // we can use this to get current element
    console.log(e.target)  //we can use this as well to get current element
    })
})