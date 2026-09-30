// EXERCISE: LEVEL 1

//          (1)
const emptyArray = [];

//          (2)
const numbers = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node']

//          (3)
console.log(numbers.length); 

//          (4)
console.log(numbers[0]); 
console.log(numbers[Math.floor(numbers.length / 2)]); 
console.log(numbers[numbers.length - 1]);

//          (5)
const mixedDataTypes = ['Hello', 42, true, null, { name: 'JS' }, [1, 2]];
console.log(mixedDataTypes.length); 

//          (6)
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//          (7)
console.log(itCompanies);

//          (8)
console.log(itCompanies.length); 

//          (9)
console.log(itCompanies[0]); 
console.log(itCompanies[Math.floor(itCompanies.length / 2)]); 
console.log(itCompanies[itCompanies.length - 1]); 

//         (10)
itCompanies.forEach(company => console.log(company));

//         (11)
itCompanies.forEach(company => console.log(company.toUpperCase()));

//         (12)
const lastCompany = itCompanies.pop();
console.log(`${itCompanies.join(', ')} and ${lastCompany} are big IT companies.`);
itCompanies.push(lastCompany);

//         (13)
const checkCompany = 'Google';
console.log(itCompanies.includes(checkCompany) ? `${checkCompany} exists`  : 'A company is not found');

//         (14)
const filteredCompanies = [];
for (let i = 0; i < itCompanies.length; i++) {
  let count = 0;
  for (let j = 0; j < itCompanies[i].length; j++) {
    if (itCompanies[i][j].toLowerCase() === 'o') count++;
  }
  if (count <= 1) {
    filteredCompanies.push(itCompanies[i]);
  }
}
console.log(filteredCompanies); 

//         (15)
console.log([...itCompanies].sort());

//         (16)
console.log([...itCompanies].reverse());

//         (17)
console.log(itCompanies.slice(0, 3));

//         (18)
console.log(itCompanies.slice(-3));

//         (19)
const midIndex = Math.floor(itCompanies.length / 2);
const midCompanies = itCompanies.length % 2 !== 0 ? itCompanies.slice(midIndex, midIndex + 1) : itCompanies.slice(midIndex - 1, midIndex + 1);
console.log(midCompanies);

//         (20)
const removedFirst = [...itCompanies];
removedFirst.shift();
console.log(removedFirst);

//         (21)
const removedMid = [...itCompanies];
removedMid.splice(midIndex, 1);
console.log(removedMid);

//         (22)
const removedLast = [...itCompanies];
removedLast.pop();
console.log(removedLast);

//         (23)
const clearAll = [...itCompanies];
clearAll.length = 0;
console.log(clearAll);


// EXERCISE: LEVEL 2


