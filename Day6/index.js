// EXERCISE: LEVEL 1

const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

//      (1a) FOR-LOOP
for (let i = 0; i <= 10; i++) { console.log(i); }
//      (1b) WHILE-LOOP
let w1 = 0;
while (w1 <= 10) { console.log(w1); w1++; }
//      (1c) DO-WHILE-LOOP
let dw1 = 0;
do { console.log(dw1); dw1++; } while (dw1 <= 10);

//      (2a) FOR-LOOP
for (let i = 10; i >= 0; i--) { console.log(i); }
//      (2b) WHILE-LOOP
let w2 = 10;
while (w2 >= 0) { console.log(w2); w2--; }
//      (2c) DO-WHILE-LOOP
let dw2 = 10;
do { console.log(dw2); dw2--; } while (dw2 >= 0);

//      (3) 
let n = 5; 
for (let i = 0; i <= n; i++) { console.log(i); }

//      (4)
for (let i = 1; i <= 7; i++) {
  console.log('#'.repeat(i));
}

//      (5) 
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

//      (6)
console.log('i    i^2   i^3');
for (let i = 0; i <= 10; i++) {
  console.log(`${i}    ${i ** 2}     ${i ** 3}`);
}

//      (7) 
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

//      (8) 
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) console.log(i);
}

//      (9) 
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) { isPrime = false; break; }
  }
  if (isPrime) console.log(i);
}

//      (10)  
let sumAll = 0;
for (let i = 0; i <= 100; i++) { sumAll += i; }
console.log(`The sum of all numbers from 0 to 100 is ${sumAll}.`); 

//      (11) 
let sumEvens = 0, sumOdds = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) sumEvens += i;
  else sumOdds += i;
}
console.log(`The sum of all evens from 0 to 100 is ${sumEvens}. And the sum of all odds from 0 to 100 is ${sumOdds}.`);

//      (12)
console.log([sumEvens, sumOdds]); 

//      (13)
const randNums = [];
for (let i = 0; i < 5; i++) {
  randNums.push(Math.floor(Math.random() * 100));
}
console.log(randNums);

//      (14) 
const uniqueRandNums = [];
while (uniqueRandNums.length < 5) {
  let r = Math.floor(Math.random() * 100);
  if (!uniqueRandNums.includes(r)) uniqueRandNums.push(r);
}
console.log(uniqueRandNums);

//      (15)
const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
let randId6 = '';
for (let i = 0; i < 6; i++) {
  randId6 += chars[Math.floor(Math.random() * chars.length)];
}
console.log(randId6);



// EXERCISE: LEVEL 2

//       (1) 
function generateId(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
  return result;
}
console.log(generateId(12));

//       (2)
const hexChars = '0123456789abcdef';
let hexColor = '#';
for (let i = 0; i < 6; i++) {
  hexColor += hexChars[Math.floor(Math.random() * 16)];
}
console.log(hexColor);

//       (3)
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
console.log(`rgb(${r},${g},${b})`);

//       (4)
const uppercaseCountries = countries.map(c => c.toUpperCase());
console.log(uppercaseCountries);

//       (5)
const countriesLength = countries.map(c => c.length);
console.log(countriesLength);

//       (6)
const countryDataStructure = countries.map(c => [
  c, 
  c.slice(0, 3).toUpperCase(), 
  c.length
]);
console.log(countryDataStructure);

//       (7)
const countriesWithLand = countries.filter(c => c.toLowerCase().includes('land'));
console.log(countriesWithLand.length > 0 ? countriesWithLand : 'All these countries are without land');

//       (8)
const countriesEndingInIa = countries.filter(c => c.endsWith('ia'));
console.log(countriesEndingInIa.length > 0 ? countriesEndingInIa : 'These are countries ends without ia');

//       (9)
let longestCountry = countries[0];
for (let i = 1; i < countries.length; i++) {
  if (countries[i].length > longestCountry.length) longestCountry = countries[i];
}
console.log(longestCountry);

//       (10)
const fiveCharCountries = countries.filter(c => c.length === 5);
console.log(fiveCharCountries);

//       (11)
let longestTech = webTechs[0];
for (let i = 1; i < webTechs.length; i++) {
  if (webTechs[i].length > longestTech.length) longestTech = webTechs[i];
}
console.log(longestTech);

//       (12)
const webTechsNested = webTechs.map(tech => [tech, tech.length]);
console.log(webTechsNested);

//       (13)
let mernAcronym = mernStack.map(tech => tech[0]).join('');
console.log(mernAcronym); 

//       (14)
const techArray = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (const tech of techArray) {
  console.log(tech);
}

//       (15)
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}
console.log(reversedFruits);

//       (16)
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];
for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j].toUpperCase());
  }
}



// EXERCISE: LEVEL 3

//       (1)
const sortedCountries = [...countries].sort();
console.log('Sorted Copy:', sortedCountries);
console.log('Original Maintained:', countries);

//       (2)
console.log([...webTechs].sort());
console.log([...mernStack].sort());

//       (3)
const extractedLandCountries = countries.filter(c => c.toLowerCase().includes('land'));
console.log(extractedLandCountries);

//       (4)
const highestCharCountry = countries.reduce((longest, current) => current.length > longest.length ? current : longest, "");
console.log(highestCharCountry);

//       (5)
const fourCharCountries = countries.filter(c => c.length === 4);
console.log(fourCharCountries);

//       (6)
const multiWordCountries = countries.filter(c => c.trim().split(/\s+/).length >= 2);
console.log(multiWordCountries); 

//       (7)
const reversedCapitalizedCountries = [...countries]
  .reverse()
  .map(c => c.toUpperCase());
console.log(reversedCapitalizedCountries);
