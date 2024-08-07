// sort() = method used to sort elements of an array in place.
//          Sorts elements as strig in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

// fruits example
// let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
// fruits.sort();
// console.log(fruits);

// numbers example
// let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}]
// by age
// people.sort((a, b) => a.age - b.age);
// by age (reverse)
// people.sort((a, b) => b.age - a.age);

// by gpa
// people.sort((a, b) => a.gpa - b.gpa);
// by gpa (reverse)
// people.sort((a, b) => b.gpa - a.gpa);

// by name
people.sort((a, b) => a.name.localeCompare(b.name));
people.sort((a, b) => b.name.localeCompare(a.name));

console.log(people);

