//callbacks, callback hell, pyramid of doom
//asynchronous programmig
// const heading1= document.querySelector(".heading1")
// const heading2= document.querySelector(".heading2")
// const heading3= document.querySelector(".heading3")
// const heading4= document.querySelector(".heading4")
// const heading5= document.querySelector(".heading5")
// const heading6= document.querySelector(".heading6")
// const heading7= document.querySelector(".heading7")

//text    Delay  color

//one     1s    violet
//two     2s    purple
//three   2s    red
//four    1s    pink
//five    2s    green
//six     3s    blue
//seven   1s    brown

// setTimeout(()=>{
//     heading1.textContent="one";
//     heading1.style.color="violet";
//     setTimeout(()=>{
//         heading2.textContent="two";
//         heading2.style.color="purple";
//         setTimeout(()=>{
//             heading3.textContent="three";
//             heading3.style.color="red";
//             setTimeout(()=>{
//                 heading4.textContent="four";
//                 heading4.style.color="pink";
//                 setTimeout(()=>{
//                     heading5.textContent="five";
//                     heading5.style.color="green";
//                     setTimeout(()=>{
//                         heading6.textContent="six";
//                         heading6.style.color="blue";
//                         setTimeout(()=>{
//                             heading7.textContent="seven";
//                             heading7.style.color="brown";
//                         },1000) //7th : after 12000 milliseconds 
//                     },3000) //6th : after 11000 milliseconds
//                 },2000)  //5th : after 8000 milliseconds
//             },1000)  //4th : after 6000 milliseconds
//         },2000)  //3rd : after 5000 milliseconds
//     },2000)  //2nd : after 3000 milliseconds
// },1000)   //1st : after 1000 milliseconds


const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")



function changeText(element, text, color, time, onSuccess, onFailure) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if (onSuccess)
                onSuccess();
        }
        else {
            onFailure();
        }
    }, time)


}

//pyramid of doom , callback

changeText(heading1, "one", "violet", 1000, () => {
    changeText(heading2, "two", "purple", 2000, () => {
        changeText(heading3, "three", "red", 1000, () => {
            changeText(heading4, "four", "pink", 3000, () => {
                changeText(heading5, "five", "green", 2000, () => {
                    changeText(heading6, "six", "blue", 2000, () => {
                        changeText(heading7, "seven", "brown", 1000, () => {
                            console.log("this is the last element")
                        }, () => {
                            console.log("heading7 does not exist")
                        })
                    }, () => {
                        console.log("heading6 does not exist")
                    })
                }, () => {
                    console.log("heading5 does not exist")
                })
            }, () => {
                console.log("heading4 does not exist")
            })
        }, () => {
            console.log("heading3 does not exist")
        })
    }, () => {
        console.log("heading2 does not exist")
    })
}, () => {
    console.log("heading1 does not exist")
})





