// spread operator =  ... allows ana iterable such as an
//                    array or string to be expanded
//                    into seperate elements
//                    (unpacks the elements)

// with numbers
// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// console.log(minimum);

// with string
// let username = "Brandon Chhin";
// let letters = [...username].join("-");
// console.log(letters);

// adding arrays using spread
let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods);

