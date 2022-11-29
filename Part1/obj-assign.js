const obj = {
  key1: "value1",
  key2: "value2",
};

obj["key3"] = "value3";
// const obj2 = {...obj};   we can clone like this
//or

const obj2 = Object.assign({}, obj);

obj["key4"] = "value4";
console.log(obj2);
