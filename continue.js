var tableItems = ['pen', 'pencil', 'paper', 'book', 'mouse', 'bottle'];

for (var i = 0; i < tableItems.length; i++){
    var item = tableItems[i];
    if (item == "book" ){
        continue;
    }
    console.log(item);
}

var numbers = [12, 23,45, 67, 78, 89, 90, 43, 65, 76, 32];
for (var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if (number > 60 ){
        continue;
    }
    console.log(number);
}