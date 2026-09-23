// EXERCISE: LEVEL 1


// let challenge = '30 Days of Javascript'
// console.log(challenge)
// console.log(challenge.length)
// console.log(challenge.toUpperCase())
// console.log(challenge.toLowerCase())
// console.log(challenge.substr(0, 2))
// console.log(challenge.substring(3, 21))
// console.log(challenge.includes('script'))
// console.log(challenge.split())
// console.log(challenge.split(" "))

// let socials ='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// console.log(socials.split(", "))

// console.log(challenge.replace('Javascript', 'Python'))
// console.log(challenge.charAt(15))
// console.log(challenge.charCodeAt(11))
// console.log(challenge.indexOf('a'))
// console.log(challenge.lastIndexOf('a'))

// let english = ' You cannot end a sentence with because because because is a conjuction '
// console.log(english.indexOf('because'))
// console.log(english.lastIndexOf('because'))
// console.log(english.search('because'))
// console.log(english)
// console.log(english.trim(''))
// console.log(challenge.startsWith('30'))
// console.log(challenge.endsWith('Javascript'))

// let regEx = /a/gi
// console.log(challenge.match(regEx))

// let string = '30 Days of'
// let value = ' Javascript'
// console.log(string.concat(value))
// console.log(challenge.repeat(2))


// // EXERCISE:  LEVEL 2


// console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
// console.log("'Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.'")

// let num1 = '10';
// if (typeof num1 !== typeof 10) {
//     num1 = Number(num1);
// }
// console.log(num1 === 10); 

// let num2 = parseFloat('9.8');
// if (num2 !== 10) {
//     num2 = Math.ceil(num2); 
// }
// console.log(num2 === 10); 

let check1 = 'python'
let check2 = 'jargon'
console.log(check1.includes('on')) & console.log(check2.includes('on'))

let check3 = 'I hope this course is not full of jargon.'
console.log(check3.includes('jargon'))

const rand0_100 = Math.floor(Math.random() * 101);
console.log(rand0_100);
const rand50_100 = Math.floor(Math.random() * 51) + 50;
console.log(rand50_100);
const rand0_255 = Math.floor(Math.random() * 256);
console.log(rand0_255);
const jsString = 'JavaScript';
const randomIdx = Math.floor(Math.random() * jsString.length);
console.log(jsString[randomIdx]);
console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");
const sentenceToSlice = 'You cannot end a sentence with because because because is a conjunction';
const slicedPhrase = sentenceToSlice.substr(31, 23); 
console.log(slicedPhrase); 


// EXERCISE: LEVEL 3


let loveStr = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let loveCount = /love/gi
console.log(loveStr.match(loveCount));  

let becauseStr = 'You cannot end a sentence with because because because is a conjunction';
let becauseCount = /because/gi
console.log(becauseStr.match(becauseCount)); 


const dirtySentence = '%I \$am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re \$is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so \(the\)resu@lt of &love& of tea&ching';
const cleanSentence = dirtySentence.replace(/[^a-zA-Z0-9\s]/g, '');
const words = cleanSentence.split(/\s+/);
const wordCounts = {};
let maxCount = 0;
let mostFrequentWord = '';

words.forEach(word => {
    if (word) {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
        if (wordCounts[word] > maxCount) {
            maxCount = wordCounts[word];
            mostFrequentWord = word;
        }
    }
});
console.log(`Clean Text: ${cleanSentence}`);
console.log(`Most frequent word: "${mostFrequentWord}" (appeared ${maxCount} times)`);

const incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const numbers = incomeText.match(/\d+/g).map(Number); 
const monthlySalary = numbers[0];
const annualBonus = numbers[1];
const monthlyCourses = numbers[2];
const totalAnnualIncome = (monthlySalary * 12) + annualBonus + (monthlyCourses * 12);
console.log(totalAnnualIncome);

