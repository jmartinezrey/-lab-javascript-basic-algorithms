
// NAMES AND INPUT

var hacker1 = `Julieta`;

console.log(`The driver's name is ${hacker1}`);

var hacker2 = prompt(`What's the navigator's name?`);

console.log(`The driver's name is ${hacker2}`);


// CONDITIONALS

if(hacker1.string > hacker2.string){
    console.log(`The driver has the longest name, is has ${hacker1.string} characters`);
}
else if(hacker1.string < hacker2.string){
    console.log(`Yo, navigator got the longest name, it has ${hacker2.string} characters`);
}
else{
    console.log(`wow, you both got equally long names, ${hacker1.string}characters!!`);
}

// LOOPS

// print all the characters of the string hacker1
let driversName = hacker1.charAt(0); 

console.log(driversName.toUpperCase());

// Print the characters of the navigator’s name, in reverse order
function reverseString(str) { 
    return str;
}
reverseString(hacker2);

// Print in alphabetical order
let names = [hacker1, hacker2];

names.sort(function(a, b){
    if(a.hacker1 < b.hacker2){ 
        console.log(`The driver's name goes first`); 
    }
    else if(a.hacker1 > b.hacker2){ 
        console.log(`Yo, the navigator goes first definitely`); 
    }
    else{ 
        console.log(`What?! You both got the same name?`); 
    }
}
)

// BONUS 

// Generate 3 paragraphs. Store the text in a String

