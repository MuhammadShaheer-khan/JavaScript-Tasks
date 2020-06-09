// 1. Declare a variable called username.
var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Muhammad Shaheer Khan";

// 3. Write script to
//   a) Declare a JS variable, titled message.
//   b) Assign “Hello World” to variable message
//   c) Display the message in alert box.
var titledMessage = "Hello World";
alert(titledMessage);

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
// alert(prompt("Enter your name"));
// alert(prompt("Enter your age"));
// alert(prompt("Enter your class"));

var name = prompt("Enter your name");
var age = prompt("Enter your age");
var level = prompt("Enter your class");

alert(name);
alert(age);
alert(level);

// 5. Write a script to display the following alert using one JS variable:
var string = "PIZZA";
alert(string + "\n" + string.substring(0,4) + "\n" + string.substring(0,3) + "\n" + string.substring(0,2) + "\n" + string.substring(0,1))

// 6. Declare a variable called email and assign to it a string that represents your Email Address
// (e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)

var email = prompt("Enter your email");
alert("My email address is " + email);

// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”.
// Display the following message in an alert box:

var book = "A smarter way to learn JavaScript";
alert("I am tring to learn from tha book " + book);

// 8. Write a script to display this in browser through JS

document.write("Yah! I can write HTML code through JAvaScript.");

// 9. Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

var i = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(i)