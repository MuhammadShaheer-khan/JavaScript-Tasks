// Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Welcome dear " + fullName);


// Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

var favMob = prompt("Enter your favourite phone name:");
var mobLen = favMob.length;
document.write("My fav phone is: " + favMob + "<br\>" + "Length of string: " + mobLen + "<br\>");


// Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

var string = "Pakistanii";
var indexOfn = string.indexOf("n");
document.write("String: " + string + "<br\>" + "Index of n is: " + indexOfn + "<br\>");


// Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

var string2 = "Hello World";
var lastIndOfl = string2.lastIndexOf("l");
document.write("String is: " + string2 + "<br\>" + "Index of n is: " + lastIndOfl + "<br\>");


// Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

var string3 = "Pakistani";
var indexOf3 = string3.indexOf(3);
document.write("String is: " + string3 + "<br\>" + "Cheracter at 3rd index is: " + indexOf3 + "<br\>");


// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

var city1 = "Hyderabad";
var cityRep = city1.replace("Hyder", "Islam");
document.write("City: " + city1 + "<br\>" + "After replacement: " + cityRep + "<br\>");


// Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;

var message = "Ali and Sami are best friends. They play cricket and football together.";
var repMessage = message.replace("and" , "&");
document.write("Message before replacement: " + message + "<br\>" + "Message after replacement: " + repMessage + "<br\>");


// Write a program that takes user input. Convert and show the input in title case.

