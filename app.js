// Question # 01

var city = prompt('Please Enter Your City'); 

if(city== "karachi"){
document.write ("<h2>Welcome to the city of lights</h2>"); 
}
else {
document.write ("<h2>Please Enter Correct City Name</h2>");
}

// Question # 02 
var gender =  prompt ("Enter Your Gender");

if (gender== "male"){
    document.write ("<h1>Good Morning Sir</h1>");
} 
else if (gender== "female"){ 
    document.write ("<h1>Good Morning Ma'am</h1>")
}
else  {
    document.write ("<h1>Invalid Gender</h1>");
}

// Question # 03 
var msg= prompt ("Enter Any Traffic Colour Name");
var color1= "<h1>Red</h1>";
var color2= "<h1>Yellow</h1>";
var color3= "<h1>Green</h1>";

if (msg=="Red"){
    document.write ("<h1>Must Stop</h1>");
}

else if (msg=="Yellow"){
    document.write ("<h1>Ready to move</h1>");
}

else if (msg=="Green"){
    document.write ("<h1>Move now</h1>")
}

else if (msg=="All"){
    document.write (color1 + "<h3>Must Stop</h3>" + "</br>");
    document.write (color2 + "<h3>Ready to move</h3>" + "</br>");
    document.write (color3 + "<h3>Move now</h3>" + "</br>");
}
else {
    document.write("<h1>Invalid Traffic Light Colour</h1>");
}

// Question # 04
var fuel= prompt ("Please Write Your Remaining Fuel");

if (fuel <= 0.25){
    document.write ("<h1>“Please refill the fuel in your car”</h1>")
}

else if (fuel >= 0.25){
    document.write ("<h1>Your Fuel is Almost Full</h1>");
}

// Question # 05
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Question # 06

document.write ("<h1>Marks Sheet</h1>" + "</br>");

var studentName = prompt("Enter Your Name");

document.write("Student Name = " + studentName + "<br>");

var eng = parseFloat(prompt("Enter Your English Marks"));
var urdu = parseFloat(prompt("Enter Your Urdu Marks"));
var math = parseFloat(prompt("Enter Your Math Marks"));
var total= parseFloat(prompt ("Enter Total Marks "))
var TM= parseFloat(total + total + total);



var obtainedMarks = eng + urdu + math;
var percentage = (obtainedMarks / 300) * 100;

document.write("English Marks = " + eng + "<br>");
document.write("Urdu Marks = " + urdu + "<br>");
document.write("Mathematics Marks = " + math + "<br>");

document.write ("Total Marks: " + TM + "<br>")

document.write("Obtained Marks = " + obtainedMarks + "<br>");
document.write("Percentage = " + percentage + "%" + "<br>");


if (percentage <= 100 && percentage >= 80) {
    document.write("Grade: A+" + "<br>" + "Remarks: Excellent");

} else if (percentage <= 79 && percentage >= 70) {
    document.write("Grade: A" + "<br>" + "Remarks: Very Good");
} else if (percentage <= 69 && percentage >= 60) {
    document.write("Grade: B" + "<br>" + "Remarks: Good");
} else if (percentage <= 59 && percentage >= 50) {
    document.write("Grade: C" + "<br>" + "Remarks: You Need to Improve");
} else {
    document.write("Result: Fail" + "<br>" + "Remarks: Sorry");
}

// Question # 07
document.write ("<h1><u><i>GUESS THE NUMBER GAME</i></u> </h1>")
var secretnum= 9;
var secret= prompt ("Guess the Secret Number");

if (secret== secretnum) {
    document.write ("<h3>“Bingo! Correct Answer”</h3>");
}else if (secret == 8){
    document.write ("<h3>“Close enough to the correct answer”</h3>");
}else if (secret == 10){
    document.write ("<h3>“Close enough to the correct answer”</h3>");
}else {
    document.write ("<h3>Try Again!</h3>")
}

// Question # 08
document.write ("<h1>Divisible by 3 OR Not</h1>")

var num = prompt ("Enter a Number");

if (num % 3 == 0) {
    document.write ("Divisible by 3");
}else {
    document.write ("Not divisible by 3");
}

// Question # 09 

document.write ("<h1>Even OR Odd</h1>")
var num  = prompt ("Enter a Number");

if (num % 2 == 0){
    document.write (num + " is Even");
}else {
    document.write (num + " is Odd");
}

// Question # 10
document.write ("<h1>Weather Information</h1>");
var Temprature = prompt ("Enter Weather Temprature");

if (Temprature >= 40){
    document.write ("“It is too hot outside.”");
}else if (Temprature >= 30){
    document.write ("“The Weather today is Normal.”");
}else if (Temprature >= 20){
    document.write ("“Today’s Weather is cool.”");
}else if (Temprature >= 10){
    document.write ("“OMG! Today’s weather is so Cool.”");
}

// Question # 11
document.write ("<h1>Calculator</h1>");
var num1 = +prompt("Enter a First Number");
var num2 = +prompt("Enter a Second Number");
var sign = prompt("Enter Operator");

if (sign == "+") {
    document.write("Your Answer is " + parseFloat(num1 + num2));
} else if (sign == "-") {
    document.write("Your Answer is " + (num1 - num2));
} else if (sign == "*"){
    document.write("Your Answer is " + num1 * num2);
} else if (sign == "/"){
    document.write("Your Answer is " + num1 / num2);
}else if (sign == "%"){
    document.write("Your Answer is " + (num1 % num2));
}else {
    document.write("Invalid Operator");
}

