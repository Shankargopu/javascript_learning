// console.log("script started!!!");

// const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);

// allButtons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         let num = 0;
//         for (let i = 0; i <= 1000000000; i++) {
//             num += i;
//         }
//         console.log(e.currentTarget.textContent, num);
//     });
// });

// let outerVariable = 0;
// for (let i = 0; i <= 100000000; i++) {
//     outerVariable += i;
// }
// console.log(`outer varaible value is ${outerVariable}`);
// console.log("script end!!!");


//In the above the event listeners will only execute once the main execution is completed.

// changing the button color to background and button text color to grey when user clicked on that specific button

const allButtons = document.querySelectorAll(".my-buttons button");
console.log(allButtons);

allButtons.forEach((button)=>{
  button.addEventListener("click",(e)=>{
    console.dir(e.target)
    e.target.classList.toggle("background-yellow");
    e.target.classList.toggle("fontcolor-grey");
    e.target.classList.toggle("button-style")
  })  
})

