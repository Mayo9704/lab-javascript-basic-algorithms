// Iteration 1: Names and Input
let hacker1 = "Jonathan";
let hacker2 = "Jose";

console.log(`the drive's names is ${hacker1}`);
console.log(`the navigator's name is ${hacker2}`);

//Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length || hacker2.length} characters!`)
}

// Iteration 3: Loops

//here is the code for J O E
let hackerVariation = "";
for (let i = 0; i < hacker1.length; i++){
    hackerVariation += `${hacker1[i].toUpperCase()} `;
}
console.log(hackerVariation);

//here is the code for E O J
hackerVariation = "";
for (let i = hacker1.length -1 ; i >= 0; i--) {
    hackerVariation += `${hacker1[i].toUpperCase()} `;
}
console.log(hackerVariation)

// Lexicografic order
if (hacker1 > hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
}

console.log();