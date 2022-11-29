const Users = [
  { userId: 1, firstName: "bhavani", gender: "Male" },
  { userId: 2, firstName: "preetham", gender: "Male" },
  { userId: 3, firstName: "swarhi", gender: "female" },
];

const [user1, user2, user3] = Users;
// const {userId,firstName} = user1;
// console.log(userId);  ///1

console.log(user1); // { userId: 1, firstName: 'bhavani', gender: 'Male' }

//Destructing firstname from user1 and gender from user3

const [{firstName}, ,{gender}] = Users;
console.log(firstName,gender)  //bhavani female

//if we want to assign new varaibles to destructured values

const [{firstName:user1Name},,{gender:user3Gender}] = Users;

console.log(user1Name, user3Gender);  //bhavani female