//intro to promises


//state of the promise can be : pending , fullfilled or rejected.
// console.log("script start");

// const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// const friedRicePromise = new Promise((resolve, reject) => {
//     if (bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')) {
//         resolve({Value:"Fried rice is on the way"})
//     }
//     else {
//         reject(new Error("Fried rice cannot be made"))
//     }
// });



// setTimeout(()=>{
//     console.log("Inside set Timeout")
// },0);

// //consuming the promise

// friedRicePromise.then((value) => {
//     console.log(value)
// }).catch((err)=>{
//     console.log(err)
// })

// let num=0
// for(let i=0;i<=10000;i++)
// {
//     num+=i;
// }
// console.log(num)
// console.log("script end!!");

// o/p: 

//  script start
// 50005000    
// script end!!
// { Value: 'Fried rice is on the way' }
//Inside set Timeout


//function returning a Promise
// function myPromise() {
//     const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
//     return friedRicePromise = new Promise((resolve, reject) => {
//         if (bucket.includes('vegetables') && bucket.includes('sat') && bucket.includes('rice')) {
//             resolve({ Value: "Fried rice is on the way" })
//         }
//         else {
//             reject(new Error("Fried rice cannot be made"))
//         }
//     });

// }

// //consuming

// myPromise().then((value) => {
//     console.log(value)
// }).catch((err) => {
//     console.log(err)
// })




//  setTimeout and promise 

//If I want to execute promise after certain time


function myPromise() {
    const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
    return friedRicePromise = new Promise((resolve, reject) => {


        setTimeout(() => {
            if (bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')) {
                resolve({ Value: "Fried rice is on the way" })
            }
            else {
                reject(new Error("Fried rice cannot be made"))
            }
        }, 10000)

    })
}

//consuming

myPromise().then((value) => {
    console.log(value)
}).catch((err) => {
    console.log(err)
})


console.log(typeof myPromise().then())