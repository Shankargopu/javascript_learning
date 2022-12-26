
const url = "https://jsonplaceholder.typicode.com/posts";

//await waits until promise is resolved 
const fetchUsingAsyncAwait=async()=>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// const data=fetchUsingAsyncAwait()
//console.log(data) //promise pending because async function returns the promise

fetchUsingAsyncAwait().then((data)=>{
    console.log(data)
})   //consuming the promise