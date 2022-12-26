//xhr : xmlHttpRequest. 

//used to make asynchronous calls to server

//we use 3 ways to create and send request to server.

// 1) XMLHttpRequest  (old way of doing)
//  2) fetch Api  (new way of doing)
// 3) axios (this is the 3rd party library) 

const xhr = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts";
// console.log(xhr.readyState)   //0

xhr.open("GET", url)
// console.log(xhr.readyState)  //1

//ready state
   // value                      indication
  //  0                           client has been created open() not called yet
  //  1                           opened : open has been called
  //  2                           headers recieved. send() has been called and header status are available
  //  3                           Loading :   response text holds partial data
  //  4                           The operation is complete

// xhr.onreadystatechange = function () {
//     if(xhr.readyState===4){
//         // console.log(typeof xhr.response)  // it is a string 

//         //we need to convert it into object  using JSON.parse
//         const response =  xhr.response;
//         const data=JSON.parse(response);
//         console.log(data)
//         console.log(typeof data) //object
//     }
// }

//xhr.onload method gives the response only when readyState is 4.
//so we can use this method directly.

xhr.onload = ()=>{
    if(xhr.status >=200 && xhr.status<300)
    {
            const response =  xhr.response;
            const data=JSON.parse(response);
            console.log(data)
            // console.log(typeof data)
            const id= data[1].id;
            const xhr2 = new XMLHttpRequest();
            const url2 = `${url}/${id}`
            console.log(url2)
            xhr2.open("GET",url2);
            xhr2.onload=()=>{
                const response = xhr2.response;
                console.log(JSON.parse(response))
            }
            xhr2.send();
    }
    else
    {
        console.log("Something went wrong")
    }
}

//handles internet errors
xhr.onerror=()=>{
    console.log("error occured")
}

xhr.send();  //helps in sending request


// console.log(xhr)