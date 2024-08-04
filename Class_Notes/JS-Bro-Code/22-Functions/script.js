// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.

// function happyBirthday(username, age){
//   console.log("Happy birthday to you!");
//   console.log("Happy birthday to you!");
//   console.log(`Happy birthday dear ${username}!`);
//   console.log("Happy birthday to you!");
//   console.log(`You are ${age} years old`);
// }

// happyBirthday("BroCode", 25);
// happyBirthday("Spongebob", 30);
// happyBirthday("Patrick", 37);


// add
function add(x, y){
  return x + y;
}

// subtract
function subtract(x, y){
  return x - y;
}

// multiply
function multiply(x, y){
  return x * y;
}

// divide
function divide(x, y){
  return x / y;
}

// modulus
function isEven(number){
  // if(number % 2 === 0){
  //   return true;
  // }
  // else{
  //   return false;
  // }

  // or (ternary)
  return number % 2 === 0 ? true : false;
}

// valid email
function isValidEmail(email){
  // if(email.includes("@")){
  //   return true;
  // }
  // else{
  //   return false;
  // }

  // or (ternary)
  return email.includes("@") ? true : false;
}

console.log(isValidEmail("Artic@AC.com"));
console.log(isValidEmail("ArticAC.com"));
console.log(isValidEmail("ArticAC@meta.com"));