// const { url } = require("inspector");

function sendRequest(method, URL) {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, URL);
        xhr.onload = () => {
            if (xhr.status == 200 && xhr.status < 300) {
                resolve(xhr.response)
            }
            else {
                reject("error occured")
            }
        }

        xhr.onerror = () => {
            reject("error occured")
        }
        xhr.send()
    })



}



// sendRequest().then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

const url = "https://jsonplaceholder.typicode.com/posts";

sendRequest("GET", url).then((response) => {
    const data = JSON.parse(response);
    console.log(data)
    return data;
}).then((data) => {
    const id = data[3].id
    return id;
}).then((id) => {
    const newUrl = `${url}/${id}`
    return sendRequest("GET", newUrl)
})
.then((newResponse)=>{
    console.log(JSON.parse(newResponse))
}).catch((err)=>{
    console.log(err)
})