// EXERCISE: LEVEL 2

//      (1)
import { countries } from './countries.js';
import { webTechs } from './web_techs.js';

//      (2)

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let cleanText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
let words = cleanText.split(/\s+/);
console.log(words);
console.log(words.length); 

//      (3)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (!shoppingCart.includes('Meat')) shoppingCart.unshift('Meat');
if (!shoppingCart.includes('Sugar')) shoppingCart.push('Sugar');

const isAllergicToHoney = true; 
if (isAllergicToHoney) {
  const honeyIndex = shoppingCart.indexOf('Honey');
  if (honeyIndex !== -1) shoppingCart.splice(honeyIndex, 1);
}

const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) shoppingCart[teaIndex] = 'Green Tea';

console.log(shoppingCart); 

//      (4)

if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
}

//      (5)

if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}

//      (6)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);



//EXERCISE: LEVEL 3

//     (1a)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((a, b) => a - b); 
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

console.log('Sorted Ages:', ages); 
console.log('Min Age:', minAge);     
console.log('Max Age:', maxAge); 


//     (1b)

let medianAge;
const midIndex = Math.floor(ages.length / 2);

if (ages.length % 2 === 0) {
  medianAge = (ages[midIndex - 1] + ages[midIndex]) / 2;
} else {
  medianAge = ages[midIndex];
}

console.log('Median Age:', medianAge); 

//     (1c)

const sumAges = ages.reduce((accumulator, currentAge) => accumulator + currentAge, 0);
const averageAge = sumAges / ages.length;

console.log('Average Age:', averageAge); 

//     (1d)
const ageRange = maxAge - minAge;

console.log('Age Range:', ageRange);

//     (1e)
const minMinusAverageAbs = Math.round(Math.abs(minAge - averageAge));
const maxMinusAverageAbs = Math.round(Math.abs(maxAge - averageAge));

console.log('Rounded absolute Value of (Min - Average):', minMinusAverageAbs); 
console.log('Rounded absolute Value of (Max - Average):', maxMinusAverageAbs); 

if (minMinusAverageAbs > maxMinusAverageAbs) {
  console.log('The minimum age is further away from the average than the maximum age.');
} else if (maxMinusAverageAbs > minMinusAverageAbs) {
  console.log('The maximum age is further away from the average than the minimum age.');
} else {
  console.log('Both are equally distant from the average.');
}

//      (1f)
const firstTenCountries = countries.slice(0, 10);

console.log('First 10 Countries:', firstTenCountries); 


//      (2) 

const midCountryIndex = Math.floor(countries.length / 2);
let middleCountries = [];

if (countries.length % 2 === 0) {
  middleCountries = [countries[midCountryIndex - 1], countries[midCountryIndex]];
} else {
  middleCountries = [countries[midCountryIndex]];
}

console.log('Middle Country(ies):', middleCountries); 


//       (3) 

const halfPoint = Math.ceil(countries.length / 2);

const firstHalfCountries = countries.slice(0, halfPoint);
const secondHalfCountries = countries.slice(halfPoint);

console.log('First Half of Countries:', firstHalfCountries); 
console.log('Second Half of Countries:', secondHalfCountries); 

