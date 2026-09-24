// EXERCISE: LEVEL 1

//     (1)
let firstName = 'afeez'
let lastName = 'abioye'
let country = 'nigeria'
let city = 'lagos'
let age = 40
let isMarried = true
let year = 2020

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

//     (2)

const checkType = typeof '10' === 10;
console.log(checkType); 

//     (3)

const checkParse = parseInt('9.8') === 10;
console.log(checkParse); 

//     (4i)

Boolean("Hello"); 
Boolean(100); 
Boolean([]); 

//      (4ii)

Boolean(""); 
Boolean(0); 
Boolean(null);

//      (5) Predicted Comparison Results (Without console.log)

4 > 3    // true
4 >= 3  //true
4 < 3   //false
4 <= 3  //false
4 == 4  //true
4 === 4  //true
4 != 4  //false
4 !== 4  //false
4 != '4' //false
4 == '4'  // true
4 === '4'  //false

//      (5) Comparison Results (With console.log)

console.log(4 > 3);    
console.log(4 >= 3);    
console.log(4 < 3);     
console.log(4 <= 3);    
console.log(4 == 4);    
console.log(4 === 4);   
console.log(4 != 4);    
console.log(4 !== 4);   
console.log(4 != '4');  
console.log(4 == '4');  
console.log(4 === '4'); 

const lenPython = 'python'.length; 
const lenJargon = 'jargon'.length; 
console.log(lenPython !== lenJargon);

//     (6) Predicted Comparison Results (Without console.log)

4 > 3 && 10 < 12  //true
4 > 3 && 10 > 12   //false
4 > 3 || 10 < 12   //true
4 > 3 || 10 > 12   //true
!(4 > 3)           //false
!(4 < 3)           //true
!(false)           //true
!(4 > 3 && 10 < 12)   //false
!(4 > 3 && 10 > 12)   //true
!(4 === '4')          //true

//      (6) Comparison Results (With console.log)

console.log(4 > 3 && 10 < 12);     
console.log(4 > 3 && 10 > 12);     
console.log(4 > 3 || 10 < 12);     
console.log(4 > 3 || 10 > 12);     
console.log(!(4 > 3));             
console.log(!(4 < 3));             
console.log(!(false));             
console.log(!(4 > 3 && 10 < 12));  
console.log(!(4 > 3 && 10 > 12));  
console.log(!(4 === '4'));         

const checkDragon = 'dragon'.includes('on'); 
const checkPython = 'python'.includes('on'); 
console.log(!checkDragon && !checkPython); 

//      (7)

let now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth() + 1)
console.log(now.getDate())
console.log(now.getDay() + 1)
console.log(now.getHours())
console.log(now.getMinutes())


const secondsElapsed = Math.floor(Date.now() / 1000);
console.log(secondsElapsed);


// EXERCISE: LEVEL 2

//    (1)

// const base = parseFloat(prompt("Enter base:"));
// const height = parseFloat(prompt("Enter height:"));
// const areaTriangle = 0.5 * base * height;
// console.log(`The area of the triangle is ${areaTriangle}`);

//      (2)

// const sideA = parseFloat(prompt("Enter side a:"));
// const sideB = parseFloat(prompt("Enter side b:"));
// const sideC = parseFloat(prompt("Enter side c:"));
// const perimeterTriangle = sideA + sideB + sideC;
// console.log(`The perimeter of the triangle is ${perimeterTriangle}`);

//     (3)

// const length = parseFloat(prompt("Enter length:"));
// const width = parseFloat(prompt("Enter width:"));
// const areaRectangle = length * width;
// const perimeterRectangle = 2 * (length + width);
// console.log(`The area of the rectangle is ${areaRectangle}, and the perimeter is ${perimeterRectangle}`);

//     (4)

// const radius = parseFloat(prompt("Enter radius:"));
// const PI = 3.14;
// const areaCircle = PI * radius * radius;
// const circumferenceCircle = 2 * PI * radius;
// console.log(`Area: ${areaCircle}, Circumference: ${circumferenceCircle}`);

//     (5 & 6)

const m = (10 - 2) / (6 - 2); 
console.log(`The slope is ${m}`); 

//     (9)

// const hours = parseFloat(prompt("Enter hours:"));
// const rate = parseFloat(prompt("Enter rate per hour:"));
// const weeklyEarning = hours * rate;
// console.log(`Your weekly earning is ${weeklyEarning}`);

//      (10)

const name = ("abdulafeez");
if (name.length > 7) {
    console.log("Your name is long");
} else {
    console.log("Your name is short");
}

//       (11)

let firstName1 = 'Asabeneh';
let lastName1 = 'Yetayeh';

if (firstName1.length > lastName1.length) {
    console.log(`Your first name, ${firstName1} is longer than your family name, ${lastName1}`);
} else {
    console.log(`Your family name, ${lastName1} is longer or equal to your first name, ${firstName1}`);
}

//      (12)

let myAge = 250;
let yourAge = 25;
let ageDiff = myAge - yourAge;
console.log(`I am ${ageDiff} years older than you.`);

//       (13)

// const birthYear = parseInt(prompt("Enter birth year:"));
// const currentYear = new Date().getFullYear();
// const age1 = currentYear - birthYear;

// if (age1 >= 18) {
//     console.log(`You are ${age1}. You are old enough to drive.`);
// } else {
//     const yearsToWait = 18 - age;
//     console.log(`You are ${age1}. You will be allowed to drive after ${yearsToWait} years.`);
// }

//       (14)

// const yearsLive = parseInt(prompt("Enter number of years you live:"));
// const secondsLived = yearsLive * 31536000;
// console.log(`You lived ${secondsLived} seconds.`);

//       (15)

const now1 = new Date();
const year1 = now1.getFullYear();
const month = String(now1.getMonth() + 1).padStart(2, '0');
const day = String(now1.getDate()).padStart(2, '0');
const hoursStr = String(now1.getHours()).padStart(2, '0');
const minutesStr = String(now1.getMinutes()).padStart(2, '0');

//         (15 i)     YYYY-MM-DD HH:mm
console.log(`${year1}-${month}-${day} ${hoursStr}:${minutesStr}`);

//         (15 ii)    DD-MM-YYYY HH:mm
console.log(`${day}-${month}-${year1} ${hoursStr}:${minutesStr}`);

//         (15 iii)   DD/MM/YYYY HH:mm
console.log(`${day}/${month}/${year1} ${hoursStr}:${minutesStr}`);



// EXERCISE: LEVEL 3

const now2 = new Date();
const year2 = now2.getFullYear();
const month2 = String(now2.getMonth() + 1).padStart(2, '0');
const day2 = String(now2.getDate()).padStart(2, '0');
const hours = String(now2.getHours()).padStart(2, '0');
const minutes = String(now2.getMinutes()).padStart(2, '0');
const formattedTime = `${year2}-${month2}-${day2} ${hours}:${minutes}`;
console.log(formattedTime); 



