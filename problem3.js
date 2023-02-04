// You are given 3 numbers 13, 79, 45 . Write a program that will print the largest number using if-else

var num1 = 13;
var num2 = 79;
var num3 = 45;

if(num1 > num2){
    if(num1 > num3){
        console.log("The largest no is :",num1);
    } else {
        console.log("The largest no is :", num3);
    }
}
else if(num2 > num3){
    console.log("The largest no is :", num2);
} else{
    console.log("The largest no is :", num3);
}


//another solution

// if(num1 > num2){
//     console.log("The largest no is :", num1);
// } else if(num1 > num3){
//     console.log("The largest no is :", num1);
// } else if (num2 > num1){
//     console.log("The largest no is :", num2);
// } else if (num2 > num3){
//     console.log("The largest no is :", num2);
// } else if (num3 > num1){
//     console.log("The largest no is :", num3);
// } else if (num3 > num2){
//     console.log("The largest no is :", num3);
// }