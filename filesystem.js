//BLOCKING VERSION

//Include file system
var fs = require('fs');

//Load and list food items
var food = fs.readFileSync('food.txt', 'utf8');
console.log("FOOD");
console.log(food);

console.log("\n");

//Load and list drink items
var drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log("DRINKS");
console.log(drinks);