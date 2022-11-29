 //objects inside Arrays
//useful in real world applications

const Users=[
    {userId:1, firstName:"bhavani",gender:"Male"},
    {userId:2, firstName:"preetham",gender:"Male"},
    {userId:3, firstName:"ramesh",gender:"Male"},
]

// console.log(Users);

for(let item of Users)
{
    console.log(item["userId"]);   //output: 1 2 3
}