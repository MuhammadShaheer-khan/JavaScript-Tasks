// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

var cityNames = "Karachi" + "Lahore" + "Islamabad" + "Multan" + "Hyderabad";
var userInput = prompt("Enter your city name:")

if (userInput === "Karachi") {
    alert("Welcome to the city of lights.")
};

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var userGender = prompt("Enter your gender:");
if (userGender == "male") {
    alert("Good morning sir!")
} else if (userGender === "female") {
    alert("Good morning madam")
};

// Question # 03

var trafficSignal = prompt("Enter traffic signal colour:");

if (trafficSignal == "red") {
    alert("Must Stop");
} else if (trafficSignal == "yellow") {
    alert("Ready to move");
} else if (trafficSignal == "green") {
    alert("Move Now");
} else {
    alert("Invalid colour");
}

// Question # 04

var carFuel = prompt("Enter remaining car fuel")

if (carFuel >= 0.2) {
    alert("Please refill the fuel in the car");
}

// Question # 05

var a = 4; if (++a === 5) {
    alert("given condition for variable a is true"); 
} 
var b = 82; if (b++ === 83) {
    alert("given condition for variable b is true"); 
}
var c = 12; if (c++ === 13) {
    alert("condition 1 is true"); 
} if (c === 13) {
    alert("condition 2 is true"); 
} if (++c < 14) {
    alert("condition 3 is true"); 
} if (c === 14) {
    alert("condition 4 is true"); 
}
var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) { 
    alert("The cost equals"); 
}
if(true){
    alert("True"); 
} if (false) { 
    alert("False"); 
} 
if("car" < "cat"){ alert("car is smaller than cat"); };

// Question # 06

var gainMarks = prompt("Enter your marks:");

if (gainMarks <= 80) {
    document.write("Total Marks: 300 <br\> Mark Obtained: " + gainMarks + "<br\>Percentage: " + gainMarks*100/300 + "<br\>");
}
// Question # 07 (skip)

// Question # 08

var numDiv = prompt("Enter a number:");

if (numDiv % 3 == 0) {
    document.write("This number can divisible by 3 <br\>")
} else {
    document.write("This number cannot divisible by 3 <br\>")
}

// Question # 09

var evenNum = prompt("Enter Number for checking the number is even or not:");

if (evenNum % 2 == 0) {
    document.write(evenNum + "is even numer. <br\>")
} else {
    document.write(evenNum + "is not a even number")
}