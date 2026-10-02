// EXERCISE: LEVEL 1

// 1
function fullName() {
  console.log("Your Full Name");
}

// 2
function fullNameWithParams(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// 3
function addNumbers(numOne, numTwo) {
  return numOne + numTwo;
}

// 4
function areaOfRectangle(length, width) {
  return length * width;
}

// 5
function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}

// 6
function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}

// 7
function areaOfCircle(r) {
  return Math.PI * r * r;
}

// 8
function circumOfCircle(r) {
  return 2 * Math.PI * r;
}

// 9
function density(mass, volume) {
  return mass / volume;
}

// 10
function speed(distance, time) {
  return distance / time;
}

// 11
function weight(mass, gravity = 9.81) {
  return mass * gravity;
}

// 12
function convertCelsiusToFahrenheit(oC) {
  return (oC * 9 / 5) + 32;
}

// 13
function calculateBmi(weightKg, heightM) {
  const bmi = weightKg / (heightM * heightM);
  if (bmi < 18.5) return "Underweight";
  if (bmi >= 18.5 && bmi <= 24.9) return "Normal weight";
  if (bmi >= 25 && bmi <= 29.9) return "Overweight";
  return "Obese";
}

// 14
function checkSeason(month) {
  const formattedMonth = month.toLowerCase().trim();
  if (["september", "october", "november"].includes(formattedMonth)) return "Autumn";
  if (["december", "january", "february"].includes(formattedMonth)) return "Winter";
  if (["march", "april", "may"].includes(formattedMonth)) return "Spring";
  if (["junior", "july", "august", "june"].includes(formattedMonth)) return "Summer";
  return "Invalid Month";
}

// 15
function findMax(num1, num2, num3) {
  let max = num1;
  if (num2 > max) max = num2;
  if (num3 > max) max = num3;
  return max;
}


// EXERCISE: LEVEL 2

// 1
function solveLinEquation(a, b, c) {
  if (a === 0 && b === 0) return c === 0 ? "Infinite solutions" : "No solution";
  if (a === 0) return `y = ${-c / b}`;
  if (b === 0) return `x = ${-c / a}`;
  return `y = ${-a / b}x + ${-c / b}`;
}

// 2
function solveQuadratic(a = 0, b = 0, c = 0) {
  if (a === 0) return b === 0 ? new Set() : new Set([-c / b]);
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) return new Set(); 
  if (discriminant === 0) return new Set([-b / (2 * a)]);
  const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  return new Set([root1, root2]);
}

// 3
function printArray(arr) {
  arr.forEach(val => console.log(val));
}

// 4. showDateTime formatting (DD/MM/YYYY HH:MM)
function showDateTime() {
  const now = new Date();
  const d = String(now.getDate()).padStart(2, '0');
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const y = now.getFullYear();
  const hr = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  return `${d}/${m}/${y} ${hr}:${min}`;
}

// 5
function swapValues(x, y) {
  let temp = x;
  x = y;
  y = temp;
  return [x, y]; 
}

// 6
function reverseArray(arr) {
  const output = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    output.push(arr[i]);
  }
  return output;
}

// 7
function capitalizeArray(arr) {
  return arr.map(item => String(item).toUpperCase());
}

// 8
function addItem(arr, item) {
  return [...arr, item];
}

// 9
function removeItem(arr, index) {
  const copy = [...arr];
  copy.splice(index, 1);
  return copy;
}

// 10
function sumOfNumbers(rangeMax) {
  let sum = 0;
  for (let i = 1; i <= rangeMax; i++) sum += i;
  return sum;
}

// 11
function sumOfOdds(rangeMax) {
  let sum = 0;
  for (let i = 1; i <= rangeMax; i++) {
    if (i % 2 !== 0) sum += i;
  }
  return sum;
}

// 12
function sumOfEven(rangeMax) {
  let sum = 0;
  for (let i = 1; i <= rangeMax; i++) {
    if (i % 2 === 0) sum += i;
  }
  return sum;
}

// 13
function evensAndOdds(posInt) {
  let evens = 0, odds = 0;
  for (let i = 0; i <= posInt; i++) {
    if (i % 2 === 0) evens++;
    else odds++;
  }
  console.log(`The number of odds are ${odds}.`);
  console.log(`The number of evens are ${evens}.`);
}

// 14
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

// 15
function randomUserIp() {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');
}

// 16
function randomMacAddress() {
  const hex = "0123456789ABCDEF";
  return Array.from({ length: 6 }, () => 
    hex[Math.floor(Math.random() * 16)] + hex[Math.floor(Math.random() * 16)]
  ).join(':');
}

// 17
function randomHexaNumberGenerator() {
  const hex = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) color += hex[Math.floor(Math.random() * 16)];
  return color;
}

// 18
function userIdGenerator() {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let id = "";
  for (let i = 0; i < 7; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}


// EXERCISE: LEVEL 3

// 1
function userIdGeneratedByUser() {
  const numChars = parseInt(prompt("Enter the number of characters per ID:"), 10);
  const numIds = parseInt(prompt("Enter the number of IDs to generate:"), 10);
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let output = "";
  
  for (let i = 0; i < numIds; i++) {
    let currentId = "";
    for (let j = 0; j < numChars; j++) {
      currentId += chars[Math.floor(Math.random() * chars.length)];
    }
    output += currentId + "\n";
  }
  return output;
}

// 2
function rgbColorGenerator() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// 3
function arrayOfHexaColors(count) {
  return Array.from({ length: count }, () => randomHexaNumberGenerator());
}

// 4
function arrayOfRgbColors(count) {
  return Array.from({ length: count }, () => rgbColorGenerator());
}

// 5
function convertHexaToRgb(hex) {
  let cleanHex = hex.replace("#", "");
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split("").map(c => c + c).join("");
  }
  const bigint = parseInt(cleanHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r},${g},${b})`;
}

// 6
function convertRgbToHexa(rgbStr) {
  const matches = rgbStr.match(/\d+/g);
  if (!matches || matches.length < 3) return "#000000";
  return "#" + matches.slice(0, 3).map(x => {
    const hex = parseInt(x, 10).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("");
}

// 7
function generateColors(type, count) {
  if (type === "hexa") {
    const colors = arrayOfHexaColors(count);
    return count === 1 ? colors[0] : colors;
  } else if (type === "rgb") {
    const colors = arrayOfRgbColors(count);
    return count === 1 ? colors[0] : colors;
  }
  return null;
}

// 8
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// 9
function factorial(num) {
  if (num < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= num; i++) result *= i;
  return result;
}

// 10
function isEmpty(param) {
  if (param === undefined || param === null) return true;
  if (typeof param === "string" || Array.isArray(param)) return param.length === 0;
  if (typeof param === "object") return Object.keys(param).length === 0;
  return false;
}

// 11
function sumOfArrayItems(arr) {
  if (!arr.every(item => typeof item === 'number')) {
    return "Error: All items in the array must be numeric numbers.";
  }
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// 12
function average(arr) {
  if (!arr.every(item => typeof item === 'number') || arr.length === 0) {
    return "Error: All items in the array must be numbers, and array cannot be empty.";
  }
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}

// 13
function modifyArray(arr) {
  if (arr.length < 5) return 'Not Found';
  const copy = [...arr];
  copy[4] = String(copy[4]).toUpperCase();
  return copy;
}

// 14
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 15
function isUniqueArray(arr) {
  return new Set(arr).size === arr.length;
}

// 16
function isSameDataTypeArray(arr) {
  if (arr.length === 0) return true;
  const firstType = typeof arr[0];
  return arr.every(item => typeof item === firstType);
}

// 17
function isValidVariable(varName) {
 
  const validVarRegex = /^[a-zA-Z_\$][a-zA-Z0-9_\(]*\)/;
  return validVarRegex.test(varName);
}

// 18
function sevenUniqueRandomNumbers() {
  const uniqueNums = new Set();
  while (uniqueNums.size < 7) {
    uniqueNums.add(Math.floor(Math.random() * 10));
  }
  return Array.from(uniqueNums);
}
