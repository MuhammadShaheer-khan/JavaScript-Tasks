// Question # Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

var int1 = prompt("Enter first Number");
var int2 = prompt("Enter second Number");

if (int1 > int2) {
    document.write(int1 + "is larger than int2 <br\>");
} else if (int2 > int1) {
    document.write(int2 + "is larger than int1 <br\>");
} else {
    document.write("Please enter number");
}

// This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening"; }

var greeting; 
var hour = 13; 
if (hour > 18) { 
    greeting = "Good day";
} else {greeting = "Good evening"; }

// Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var numbr = prompt("Enter a number:");
if (numbr == 0) {
    document.write("The number is zero <br\>");
} else if (numbr > 0) {
    document.write("The number is negative <br\>");
} else {
    document.write("The number is Positive <br\>");
}

// Declare and initialize a numbers array.
var numArray = [1, 2, 3, 4];

// Declare and initialize a boolean array.
var boolArray = [true, false];

// Declare and initialize a mixed array.

var mixArray = [1, 2, 3, "String", false, 8, "array"];

// Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).

var pakEduQua = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("Qualifications <br\>"+ pakEduQua[0]+ "<br\> " +pakEduQua[1] + "<br\> " +pakEduQua[2] + "<br\> " + pakEduQua[3]+ "<br\> " + pakEduQua[4]+ "<br\> " + pakEduQua[5]+ "<br\> " +pakEduQua[6] +"<br\>"+ pakEduQua[7]  + "<br\>");

// Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”];

var arr = ["This","is","my", "cat"];
document.write(arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3] + "<br\>");

// Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

var sortAsc = [50, 40, 90, 30, 70, 10, 60, 20, 80]

document.write("Score of the students: " + sortAsc + "<br\>");
document.write("Ordered score of students: " + sortAsc.sort() + "<br\>");

// Declare and initialize an empty multidimensional array. (Array of arrays)
var arrOfarr = [[]];

// Declare and initialize a multidimensional array representing the following matrix

var multiArr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for(i = 0; i < 3; i++)
{
    for(j = 0; j <= 3; j++)
    {
        document.write(multiArr[i][j] + " ")
    }
    document.write('<br>')
}


// Write a program to print numeric counting from 1 to 10.

var i;
for (i = 0; i < 11; i++) {
  console.log(i + "<br>");
};

// You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
