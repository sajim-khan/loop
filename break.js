for (var i = 1; i < 108; i++){
    console.log(i);
   if (i > 8){
    break;
   }
}

var numbers = [12, 23,45, 67, 78, 89, 90, 43, 65, 76, 32];
for (var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if (number >80 ){
        break;
    }
    console.log(number);
}

var tableItems = ['pen', 'pencil', 'paper', 'book', 'mouse', 'bottle'];

for (var i = 0; i < tableItems.length; i++){
    var item = tableItems[i];
    if (item == "book" ){
        break;
    }
    console.log(item);
}