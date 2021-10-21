/* Challenge 1: Replicate and Evaluate as True */
console.log("Challenge 1");
console.log("4 less than 5?");
console.log(4 < 5);
console.log("6 greater than 3?");
console.log(6 > 3);
console.log("0 equal to 0?");
console.log(0 == 0);

/* Challenge 2: Loop from 1-100 and display "Multiple of 5" or number */
console.log("\nChallenge 2");
for(var i = 1; i <= 100; i++) {
    if(i % 5 == 0) {
        console.log("Multiple of 5");
    } else {
        console.log(i);
    }
}

/* Challenge 3: Convert For Loop to While Loop */
console.log("\nChallenge 3");
var i = 0;
while(i <= 100) {
    if(i % 5 == 0) {
        console.log("Multiple of 5");
    } else {
        console.log(i);
    }
    i++;
}

/* Challenge 4: My name and age */
console.log("\nChallenge 4");
var myName = "Dan";
var myAge = 20;
console.log("My name is " + myName + " and I am " + myAge + " years old.");

/* Challenge 5: Alcohol Alert */
console.log("\nChallenge 5");
var userAge = prompt("Please enter your age: ");

if(userAge >= 21) {
    alert("You are old enough to drink! Time to party...:)");
} else {
    alert("No alcohol for you! womp womp...:(");
}

/* Challenge 6: numberAdder Function */
console.log("\nChallenge 6");
var numberAdder = function() {
    var sum = 0;
    
    for(var i = 1; i <= 100; i++) {
        sum = sum + i;
    }

    console.log("Adding the numbers 1-100 together results in " + sum + ".");
}
numberAdder();

/* Challenge 7: Box Volume */
console.log("\nChallenge 7");
var boxVolume = function(length, width, height) {
    var volume = length * width * height;

    console.log("You entered: " + length + " for length, " + width + " for width, and " + height + " for height.");
    console.log("The volume is: " + volume);
}

var l = prompt("Enter the length: ");
var w = prompt("Enter the width: ");
var h = prompt("Enter the height: ");
boxVolume(l, w, h);