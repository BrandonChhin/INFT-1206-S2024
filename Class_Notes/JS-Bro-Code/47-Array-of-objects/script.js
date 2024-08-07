
const fruits = [{name: "apple", colour: "red", calories: 95},
                {name: "orange", colour: "orange", calories: 45}, 
                {name: "banana", colour: "yellow", calories: 105}, 
                {name: "coconut", colour: "white", calories: 159}, 
                {name: "pineapple", colour: "yellow", calories: 37}];

// accessing a property
// console.log(fruits[0].calories);

// ---------- map() ----------

// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColours = fruits.map(fruit => fruit.colour);
// const fruitCalories = fruits.map(fruit => fruit.calories);

// console.log(fruitNames);
// console.log(fruitColours);
// console.log(fruitCalories);


// ---------- filter() ----------
// const yellowFruits = fruits.filter(fruit => fruit.colour === "yellow");
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// const HighCalFruits = fruits.filter(fruit => fruit.calories >= 100);

// console.log(yellowFruits);
// console.log(lowCalFruits);
// console.log(HighCalFruits);


// ---------- reduce() ----------

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);

const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);

console.log(maxFruit);
console.log(minFruit);