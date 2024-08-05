// forEach() = method used to iterate over the elements
//             of an array and apply a specific function (callback)
//             to each element

//             array.forEach(callback)
//             element, index, array are provided


// functions to make each element math
// let numbers = [1, 2, 3, 4, 5];


// numbers.forEach(cube);
// numbers.forEach(display);

// double function
// function double(element, index, array){
//   array[index] = element * 2;
// }

// triple function
// function triple(element, index, array){
//   array[index] = element * 3;
// }

// square function
// function square(element, index, array){
//   array[index] = Math.pow(element, 2);
// }

// cube function
// function cube(element, index, array){
//   array[index] = Math.pow(element, 3);
// }

// display element function
// function display(element){
//   console.log(element);
// }



let fruits = ["apple", "orange", "banana", "coconut"];
let fruits2 = ["APPLE", "ORANGE", "BANANA", "COCONUT"];

// fruits.forEach(upperCase);
fruits.forEach(capitalize);
fruits.forEach(display);

// upperCase function
function upperCase(element, index, array){
  array[index] = element.toUpperCase();
}

// Capitalize function
function capitalize(element, index, array){
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

// lowerCase function
function lowerCase(element, index, array){
  array[index] = element.toLowerCase();
}

// display in console function
function display(element){
  console.log(element);
}