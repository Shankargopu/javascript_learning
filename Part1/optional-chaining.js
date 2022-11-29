const obj = {
  firstName: "user",
  adress: {
    village: "RPG",
    state: "AP",
    country: "IND",
  },
};

// console.log(obj)
console.log(obj.adress.village); //RPG
console.log(obj.lastName); //undefined
// console.log(obj.lastName.person); //error : Cannot read property 'person' of undefined

//To avoid such kind of errors we need to use optional chaining
console.log(obj?.adress?.village); //RPG
console.log(obj?.lastName); //undefined
console.log(obj?.lastName?.person); //undefined
