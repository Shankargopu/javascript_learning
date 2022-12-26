const url = "https://jsonplaceholder.typicode.com/posts";

//fetch returns promise
// const whatIsThis = fetch(url)

// console.log(whatIsThis) //promise

// fetch(url).then((response)=>{
//    // console.log(response)   //we need to use jon() method on response. It will also return promise
//    if(response.status===200)
//    {
//     return response.json();
//    }
//    else
//    {
//     throw new Error("something went wrong")
//    }
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log("inside catch")
//     console.log(err)
// })
//catch method only catches internet errors so we need to explicitly throw error using Error object to catch.






//post with fetch



fetch(url,{
    method:"POST", 
    body:JSON.stringify({
        title:'foo',
        body:'bar',
        userId:1
    }),
    headers:{
        'Content-Type':'application/json'
    }
}).then((response)=>{
    // console.log(response)   //we need to use jon() method on response. It will also return promise
    if(response.ok)
    {
     return response.json();
    }
    else
    {
     throw new Error("something went wrong")
    }
 }).then((data)=>{
     console.log(data)
 }).catch((err)=>{
     console.log("inside catch")
     console.log(err)
 })