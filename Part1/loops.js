// while
// let i=0;
// while(i<=9)
// {
//     console.log(i);
//     i++;
// }

// do-while
// let i = 10;
// do {
//   console.log(i);   //executes atleast one time even if while loop fails
//   i++;
// } while (i <= 9);

//adding first n natural numbers

let totalNumbersToBeAdded=5;
let temp=totalNumbersToBeAdded;
let sum=0;
while(temp>0)
{
  sum+=temp;
  temp--;
}

console.log(`The sum of first ${totalNumbersToBeAdded} numbers is ${sum}`);