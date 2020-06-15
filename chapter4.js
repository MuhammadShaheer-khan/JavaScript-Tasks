// 1. Declare 3 variables in one statement.

var firstName = "Muhammad Shaheer", lastName = "Khan", age= 20;
document.write(firstName + " " + lastName + " " + age + "\n" + "  ");

// 2. Declare 5 legal & 5 illegal variable names.
//    Legal Variables
var number1 = "Numbers", $signs = "$signs", under_score = "_Underscore", caseSensitive = "camelCase", variable2$ = "this"
//    Illegal Variables
var 1number = "var allways starts with latter", for = "cannot use reserved keyword", 2ndName = "asdf", if = "this", or = "this"

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable
// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

document.write("RULES FOR NAMING JS VARIBLES");
document.write("Variable names can only contain Numbers, signs, underscore and caseSensitive. For example $my_1stVariable");
document.write("Variables must begin with a latter, sign or underscore. For example $name, _name or name");
document.write("Variable names are case Sensitive");
document.write("Variable names should not be JS keywords");