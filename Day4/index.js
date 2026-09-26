// EXERCISE: LEVEL 1

//       (1)

// const userAge = parseInt(prompt("Enter your age:"));

// if (userAge >= 18) {
//     console.log("You are old enough to drive.");
// } else {
//     const yearsLeft = 18 - userAge;
//     console.log(`You are left with ${yearsLeft} years to drive.`);
// }

//      (2)

// const myAge = 25; 
// const yourAge = parseInt(prompt("Enter your age:"));

// if (yourAge > myAge) {
//     console.log(`You are ${yourAge - myAge} years older than me.`);
// } else if (yourAge < myAge) {
//     console.log(`I am ${myAge - yourAge} years older than you.`);
// } else {
//     console.log("We are the same age!");
// }

//      (3) USING 'IF ELSE'

let a = 4;
let b = 3;

if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is less than ${b}`);
}

//       (3) USING TERNARY OPERATOR

let result = a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`;
console.log(result);

//       (4)

// const number = parseInt(prompt("Enter a number:"));

// if (number % 2 === 0) {
//     console.log(`${number} is an even number`);
// } else {
//     console.log(`${number} is an odd number.`);
// }



// EXERCISE: LEVEL 2

//      (1)

let score = ""

if (score >= 80 && score <= 100) {
    console.log('Grade: A')
} else if (score >= 70 && score <=79) {
    console.log('Grade: B')
} else if (score >= 60 && score <=69) {
    console.log('Grade: C')
} else if (score >= 50 && score <=59) {
    console.log('Grade: D')
} else {
    console.log('Grade: F')
}  

//      (2)

const season = ""
switch (season) {
    case 'September':
    case 'October':
    case 'November':
        console.log('the season is Autumn')
        break;
    case 'December':
    case 'January':
    case 'February':
        console.log('the season is Winter')
        break;  
    case 'March':
    case 'April':
    case 'May':
        console.log('the season is Spring')
        break;    
    case 'June':
    case 'July':
    case 'August':
        console.log('the season is Summer')
        break;
    default:
        console.log("unknown season")                  
}

//      (3)

const inputDay = "saturday".toLowerCase();
const capitalizedDay = inputDay.charAt(0).toUpperCase() + inputDay.slice(1);

if (inputDay === "saturday" || inputDay === "sunday") {
    console.log(`${capitalizedDay} is a weekend.`);
} else if (["monday", "tuesday", "wednesday", "thursday", "friday"].includes(inputDay)) {
    console.log(`${capitalizedDay} is a working day.`);
} else {
    console.log("Invalid day identifier entered.");
}


// EXERCISE: LEVEL 3

//      (1) NOT LEAP YEAR

const rawMonth = ""
const month = rawMonth.toLowerCase();
const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);

switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${formattedMonth} has 31 days.`);
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${formattedMonth} has 30 days.`);
        break;
    case "february":
        console.log(`${formattedMonth} has 28 days.`);
        break;
    default:
        console.log("Invalid month");
}

//         (1) LEAP YEAR

const checkMonthRaw = "";
const checkMonth = checkMonthRaw.toLowerCase();
const finalMonthName = checkMonth.charAt(0).toUpperCase() + checkMonth.slice(1);
const currentYear = new Date().getFullYear();
const isLeapYear = (currentYear % 4 === 0 && currentYear % 100 !== 0) || (currentYear % 400 === 0);

switch (checkMonth) {
    case "january": case "march": case "may": case "july": 
    case "august": case "october": case "december":
        console.log(`${finalMonthName} has 31 days.`);
        break;
    case "april": case "june": case "september": case "november":
        console.log(`${finalMonthName} has 30 days.`);
        break;
    case "february":
        if (isLeapYear) {
            console.log(`${finalMonthName} has 29 days (Leap Year ${currentYear}).`);
        } else {
            console.log(`${finalMonthName} has 28 days (${currentYear}).`);
        }
        break;
    default:
        console.log("Invalid month label entered.");
}
