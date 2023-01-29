a = 5;
b = 6;

if (a < b) {
    console.log("b is greater than a")
} else {
    console.log("a is greater than b")
}


var tableItems = ['pen', 'pencil', 'paper', 'book', 'mouse', 'bottle'];
//tableItems.pop();
tableItems.shift();
tableItems.push('laptop');
//tableItems.unshift('table');
console.log(tableItems);
var item3 = tableItems[3];
console.log(item3);
tableItems[6] = 'notebook';
console.log(tableItems);
tableItems.pop();
