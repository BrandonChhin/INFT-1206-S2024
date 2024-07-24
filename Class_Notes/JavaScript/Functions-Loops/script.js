// console.log("Script is running...");

// ----------- Loops ------------

// A loop is a block of code that we want to repeat a certain number of times. A loop will repeat until a condition is met.

// For Loop

// for (let i = 0; i <= 20; i += 3) {
//     console.log(i)
// }

// While Loop
// let i = 0;
// while (i <= 20) {
//     console.log(i)
//     i += 3 // If we don't include this line, we will have a problem, we will have an infinite loop
// }

// Do While Loop
// let i = 0;
// do {
//     console.log(i)
//     i += 3;
// } while (i <= 20)

// For Of Loop
// let numsArray = [1,2,3,4,5,6,7]

// for (let num of numsArray) {
//     console.log(num)
// }

// For In Loop

// Foreign Objects - UFO
// let car = {type: "Hypercar", brand: "Porsche", model: "Spyder"}

// for (let key in car) {
//     console.log(key)
//     console.log(car[key])
// }


// ------------ Functions ------------

// We want to create a function that will take 2 numbers as  input and return the sum of those numbers.

// () --> An expression commonly used when executing a function of method
// function sumOfTwoNumbers() {
//   // Body of the function

// }


// Class Function exercises

// 1. Write a function that will display all the numbers from 1 to 999.
// function count999() {
//   let i = 1;
//   while (i <= 998) {
//     i += 1;
//     console.log(i);
//   }
// }
// count999();


// 2. Write a function that will display all the even numbers from 1 to 999.
// function count999() {
//     let i = 1;
//     while (i <= 998) {
//       i += 1;
//       if (i % 2 === 0) {
//         console.log(i);
//       }
//     }
//   }
//   count999();


// 3. Write a function that will display all the numbers divisible by 7 from 1 to 999.
// function count999() {
//     let i = 1;
//     while (i <= 998) {
//       i += 1;
//       if (i % 7 === 0) {
//         console.log(i);
//       }
//     }
//   }
//   count999();


// 4. Write a function that will iterate through an object and display all of its keys and values
// let obj = {brand1: "Porsche", brand2: "Mercedes", brand3: "BMW"};
// console.log(Object.entries(obj));



// 5. Write a function that will iterate through an array and display all of its elements.
// let array = [1,2,3,4,5,6,7,8,9]
// console.log(array.toString())


// 6. Write a function that will iterate though a numbers array and add 1 to each of its values.
let array1 = [1,2,3,4,5,6,7,8,9]

function addOneArray() {
  arrayLength = array1.length;
  
  for (let i = 0; i <= arrayLength - 1; i++) {
    array1[i] += 1;
  }
  console.log(array1);
}

addOneArray(array1)




// 7. Write a function that will initiate a prompt where you 
// write the name of the month and it will return (log) which season the month is in