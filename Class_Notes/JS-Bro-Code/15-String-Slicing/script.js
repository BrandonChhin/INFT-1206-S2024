// string slicing = creating a substring 
//                  from a portion of another string

//                  string.slice(start, end)


// const fullName = "Brandon Chhin"
// let firstName = fullName.slice(0, 7);
// let lastName = fullName.slice(8, 13);
// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);

// Using .indexOf as the index
// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(firstName);
// console.log(lastName);


const email = "TBRBeeqo@gmail.com"

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(userName);
console.log(extension);