// string methods = allow you to manipulate and work with text (strings)

let userName = "ArticAC";


// Shows character at index _
// console.log(userName.charAt(0));


// Show index of first occurance of character
// console.log(userName.indexOf("r"));


// Show index of last occurance of character
// console.log(userName.lastIndexOf("a"));


// Get length of a string
// console.log(userName.length);


// Trim whitespace
// userName = userName.trim()
// console.log(userName);


// Upper case a string
// userName = userName.toUpperCase();
// console.log(userName);


// Lower case a string
// userName = userName.toLowerCase();
// console.log(userName);


// Repeat a string
// userName = userName.repeat(3);
// console.log(userName);


// startswith character
// let result = userName.startsWith(" ");
// if(result){
//   console.log("Your username can't begin with ' '");
// }
// else{
//   console.log(userName);
// }


// endswith character
// let result = userName.endsWith(" ");
// if(result){
//   console.log("Your username can't end with ' '");
// }
// else{
//   console.log(userName);
// }


// does string include a character
// let result = userName.includes(" ");
// if(result){
//   console.log("Your username can't include ' '");
// }
// else{
//   console.log(userName);
// }


// ReplaceAll
// let phoneNumber = "123-456-7890";
// phoneNumber = phoneNumber.replaceAll("-", "/")
// console.log(phoneNumber);


// padStart method
// let phoneNumber = "123-456-7890";
// phoneNumber = phoneNumber.padStart(20, "0")
// console.log(phoneNumber);


// padEnd method
let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.padEnd(20, "0")
console.log(phoneNumber);
