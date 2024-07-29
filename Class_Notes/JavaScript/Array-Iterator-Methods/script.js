  // console.log("Script is running...")

  // const arr = [10,12,35,24,65];

  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  // }

  // function logNumber(num) {
  //  console.log(num) 
  // }

  // arr.forEach((element, indexOfElement, array) => {
  //   console.log(element)
  //   // console.log(indexOfElement)
  //   // console.log(array)
  // }
  //   )

  // const foods = [
  //   {name: 'Apple', type: 'fruit', calories: 95},
  //   {name: 'Banana', type: 'fruit', calories: 105},
  //   {name: 'Broccoli', type: 'vegetable', calories: 55},
  //   {name: 'Carrot', type: 'vegetable', calories: 25},
  //   {name: 'Avocado', type: 'fruit', calories: 250},
  //   {name: 'Chicken', type: 'poultry', calories: 350},
  // ]

  // forEach (Mutable - Changes array)
  // foods.forEach((foodItem, index) => {
  //   foodItem.calories += 800
  //   console.log(foodItem)
  // })

  // map (Non mutable - New array created)
  // const foodTypes = foods.map((foodItem, index) => {
  //   foodItem.calories += 800
  //   return {...foodItem, calories: foodItems};
  // })

  // console.log(foods)
  // console.log(foodTypes)

  // filter
  // const foodsUnder100Calories = foods.filter(foodItem => foodItem.calories < 100)

  // console.log(foodsUnder100Calories);

  // find
  // const chicken = foods.find(foodItem => {
  //   return foodItem.name == 'Chicken'
  // })
  // console.log(chicken)

  // findIndex
  // const veggieIndex = foods.findIndex(foodItem => {
  //   return foodItem.type == 'vegetable'
  // })
  // console.log(veggieIndex)

  // every
  // let sumOfCalories = foods.reduce((acc, foodItem) => {
  //   return acc + foodItem.calories

  // }, 0)
  // console.log(sumOfCalories)


  // Array Iterator Method Exercises

  const foods = [
    {name: 'Apple', type: 'fruit', calories: 95},
    {name: 'Banana', type: 'fruit', calories: 105},
    {name: 'Broccoli', type: 'vegetable', calories: 55},
    {name: 'Carrot', type: 'vegetable', calories: 25},
    {name: 'Alligator Pears', type: 'fruit', calories: 250},
    {name: 'Chicken', type: 'poultry', calories: 350},
  ]

  // 1. Get an array of food types using map()
  // const foodTypes = foods.map((foods) => foods.type)
  // console.log(foodTypes)

  // 2. Filter foods with calories greater than 100
  // const foodFilter100 = foods.filter(foodItem => foodItem.calories > 100)
  // console.log(foodFilter100)

  // 3. Find the first fruit in the array
  // const fruitFirstFind = foods.find(foodItem => {
  //     return foodItem.type == 'fruit'
  //   })
  // console.log(fruitFirstFind)

  // 4. Check if there is any food with the name 'Apple'
  // const anyApple = foods.some(foodItem => {
  //   return foodItem.name == 'Apple'
  // })
  // console.log(anyApple)


  // 5. Check if all foods have calories less than 700
  // const allCaloriesLess700 = foods.every(foodItem => {
  //   return foodItem.calories < 700;
  // })
  // console.log(allCaloriesLess700)

  // 6. Calculate the average calories of all foods using reduce()
  // const totalCalories = foods.reduce((sum, foodItem) => sum + foodItem.calories, 0);

  // // Calculate the average calories
  // const averageCalories = totalCalories / foods.length;

  // console.log(averageCalories.toFixed(2));
  
  // 7. Sort foods alphabetically by name using sort()
  // const alphabeticFoodArray = foods.sort();

  // console.log(alphabeticFoodArray);

  // 8. Create an array of food names with their types as a string,
  // ex. {"Apple is a Fruit", "Banana is a Fruit", etc...}
  // const foodDescriptions = foods.map(foodItem => `${foodItem.name} is a ${foodItem.type}`);
  // console.log(foodDescriptions);


  // 9. Filter foods that are fruits
  // const foodFilterFruit = foods.filter(foodItem => foodItem.type == 'fruit')
  // console.log(foodFilterFruit)

  // 10. Find the index of 'Alligator Pears'
  // const findAlligatorPears = foods.findIndex(foodItem => {
  //     return foodItem.name == 'Alligator Pears'
  //   })
  // console.log(findAlligatorPears)