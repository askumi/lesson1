//NON-BLOCKING 	

//Include file system
var fs = require('fs');

//Load and list food items
var food = fs.readFile('food.txt', 'utf8', function(err, food){
	if(err){
		console.log(err);
	}
	else{
		console.log("FOOD");
		console.log(food);
	}
});

//Load and list drink items
var drinks = fs.readFile('drinks.txt', 'utf8', function(err, drinks){
	if(err){
		console.log(err);
	}
	else{
		console.log("DRINKS");
		console.log(drinks);
	}
});