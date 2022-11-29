let firstName = "<sHankar>";
let nameWithSpaces = "     Bhavani Shankar    ";
let multipleNames = "Bhavani,Shankar,Nani,Ram,Charan";

console.log(firstName.length); //gives the length of the string
console.log(firstName[2]); //returs the character at 2 index i.,e 'a'
console.log(firstName.includes("s")); //[true] returns true or false, if entered char present or not. second argument takes position.
console.log(firstName.toUpperCase()); // SHANKAR
console.log(firstName.toLowerCase()); //shankar

console.log(nameWithSpaces.trim()); //removes the spaces from string both ends  //output bhavani shankar
console.log(nameWithSpaces.trimStart()); //removes the spaces at start of the string
console.log(nameWithSpaces.trimEnd()); //remove the spaces at end of the string

console.log(firstName.slice(0, 5)); //output: sHank (0 to 4)
console.log(firstName.substring());  //return the substring based on indexes
console.log(multipleNames.split(','))  //return an array which seperated by comma. output:[ 'Bhavani', 'Shankar', 'Nani', 'Ram', 'Charan' ]
console.log(firstName.replace('H','h'))
