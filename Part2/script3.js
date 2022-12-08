//get multipleElements by using getElementsByClassName , getElementByTagName
//get multipleElements by using querySelectorAll

//we don't need to use any ., # before the className in the method
//it return array like objects
let navItems = document.getElementsByTagName("a");
console.log(navItems); //HTMLCollection(3) [li.a, li.a, li.a]
console.log(typeof navItems); //object
console.log(Array.isArray(navItems)); //false
const ArrayItems = Array.from(navItems);

const length = navItems.length;
//for-loop

// for(let i=0;i<length;i++){
//     console.log(navItems[0])
//     navItems[i].style.color="white"
//     navItems[i].style.fontWeight="bold"
// }

//for-of
// for(let item of navItems){
//     item.style.color="white"
//     item.style.fontWeight="bold"
// }

//cannot use forEach to iterate HTML collection
//but we can change the HTML collection into Array and use the forEach

//for-each loop after converting to array, Ater conerting to array we can use any array operations
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems))  //true
// navItems.forEach((item)=>{
//     item.style.color="white",
//     item.style.fontWeight="bold"
// })

let navItems1 = document.querySelectorAll("a");
console.log(navItems1); //NodeList(3) [li.nav-item, li.nav-item, li.nav-item]
console.log(typeof navItems1); //object
console.log(Array.isArray(navItems1)); //false

//with node list we can use
//for-loop , for of loop and forEach as well

// for(let i=0;i<length;i++){
//     console.log(navItems1[0])
//     navItems1[i].style.color="white"
//     navItems1[i].style.fontWeight="bold"
// }

// for-of

// for(let item of navItems){
//     item.style.color="white"
//     item.style.fontWeight="bold"
// }

//forEach

navItems1.forEach((item) => {
 item.style.color = "white";
 item.style.fontWeight = "bold";
});


//we can change nodeList to Array as well

navItems1 = Array.from(navItems1);
console.log(Array.isArray(navItems1));