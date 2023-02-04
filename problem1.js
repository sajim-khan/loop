//find the index of banana nad replace banana with mango 
//remove orange and add watermelon

var fruits = ['apple', 'banana', 'orange' ];
var bananaIndex = fruits.indexOf('banana');
console.log(bananaIndex);
fruits[bananaIndex] = 'mango';
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('watermelon');
console.log(fruits);