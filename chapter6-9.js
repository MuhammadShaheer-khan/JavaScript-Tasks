// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

var a = 10;

document.write("Result: <br\> The value of a is: ", a);
document.write("<br\> -----------------------------------")
document.write("<br\> The value of ++a is: ", ++a);
document.write("<br\> Now the value of a is: ", a);
document.write("<br\>");
document.write("<br\> The value of a++ is: ", a++);
document.write("<br\> Now the value of a is: ", a);
document.write("<br\>");
document.write("<br\> The value of --a is: ", --a);
document.write("<br\> Now the value of a is: ", a);
document.write("<br\>");
document.write("<br\> The value of a-- is: ", a--);
document.write("<br\> Now the value of a is: ", a);

// 2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage:
// --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;
document.write("<br\> -----------------------------------")
var x = 2, y = 1;
var result = --x - --y + ++y + y--;

document.write("<br\> x is ", x);
document.write("<br\> y is ", y);
document.write("<br\> Result ", result);


// 3. Write a program that takes input a name from user & greet the user.
var Uname = prompt("Enter name");

alert("Welcome " + Uname);

// Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

// for (var a = 0; a < 10; a++) {
//     document.write();
//     for (var b = 0; b < 10; b++) {
//         document.write(a * b);
//     }
//     document.write();
// }
// for(let i = 1; i < 13 ; i++){
//     for(let j = 1; j < 13 ; j++){
//       console.log("${j} x ${i} = ${j*i}")
//     };
document.write("<br\> -----------------------------------")
for (var num = 1; num < 11; num++) {
    document.write("<br\>")
    document.write("2" + "X" + num + "=" + 2*num + "<br\>")
};

// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)