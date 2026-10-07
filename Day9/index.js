// EXERCISE: LEVEL 1

//   (1)
const dog = {};

//   (2)
console.log(dog);

//   (3)
dog.name = 'Rex';
dog.legs = 4;
dog.color = 'Brown';
dog.age = 3;
dog.bark = function() {
  return 'woof woof';
};

//   (4)
console.log('Name:', dog.name);
console.log('Legs:', dog.legs);
console.log('Color:', dog.color);
console.log('Age:', dog.age);
console.log('Bark:', dog.bark());

//   (5)
dog.breed = 'German Shepherd';
dog.getDogInfo = function() {
  return `${this.name} is a ${this.age} year old ${this.color} ${this.breed}.`;
};

console.log(dog.getDogInfo());



// EXERCISE: LEVEL 2

const users = {
  Alex: { email: 'alex@alex.com', skills: ['HTML', 'CSS', 'JavaScript'], age: 20, isLoggedIn: false, points: 30 },
  Asab: { email: 'asab@asab.com', skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'], age: 25, isLoggedIn: false, points: 50 },
  Brook: { email: 'daniel@daniel.com', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'], age: 30, isLoggedIn: true, points: 50 },
  Daniel: { email: 'daniel@alex.com', skills: ['HTML', 'CSS', 'JavaScript', 'Python'], age: 20, isLoggedIn: false, points: 40 },
  John: { email: 'john@john.com', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'], age: 20, isLoggedIn: true, points: 50 },
  Thomas: { email: 'thomas@thomas.com', skills: ['HTML', 'CSS', 'JavaScript', 'React'], age: 20, isLoggedIn: false, points: 40 },
  Paul: { email: 'paul@paul.com', skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'], age: 20, isLoggedIn: false, points: 40 }
};

//    (1)
const mostSkilledPerson = Object.keys(users).reduce((mostSkilled, current) => 
  users[current].skills.length > users[mostSkilled].skills.length ? current : mostSkilled
);
console.log('Most skilled person:', mostSkilledPerson); // Asab

//    (2)
const loggedInCount = Object.values(users).filter(user => user.isLoggedIn).length;
const highPointsCount = Object.values(users).filter(user => user.points >= 50).length;

console.log(`Logged in users: ${loggedInCount}`); // 2
console.log(`Users with >= 50 points: ${highPointsCount}`); // 3

//    (3)
const mernDevelopers = Object.keys(users).filter(user => {
  const s = users[user].skills;
  return s.includes('MongoDB') && s.includes('Express') && s.includes('React') && s.includes('Node');
});
console.log('MERN Developers:', mernDevelopers); // ['Asab', 'Paul']

//    (4)
const updatedUsers = JSON.parse(JSON.stringify(users));
updatedUsers['YourName'] = {
  email: 'yourname@example.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  age: 24,
  isLoggedIn: true,
  points: 60
};

//    (5)
const keys = Object.keys(users);
console.log('Keys:', keys);

//    (6)
const values = Object.values(users);
console.log('Values:', values);

//    (7)
const countriesMock = {
  Nigeria: { capital: 'Abuja', population: 220000000, languages: ['English', 'Hausa', 'Yoruba', 'Igbo'] }
};
Object.keys(countriesMock).forEach(country => {
  const { capital, population, languages } = countriesMock[country];
  console.log(`${country}'s capital is ${capital}. It has a population of ${population} and speaks ${languages.join(', ')}.`);
});



// EXERCISE: LEVEL 3

//   (1a)
const personAccount = {
  firstName: 'John',
  lastName: 'Doe',
  incomes: [
    { amount: 3000, description: 'Salary' },
    { amount: 500, description: 'Freelancing' }
  ],
  expenses: [
    { amount: 1000, description: 'Rent' },
    { amount: 200, description: 'Groceries' }
  ],
  totalIncome() {
    return this.incomes.reduce((total, inc) => total + inc.amount, 0);
  },
  totalExpense() {
    return this.expenses.reduce((total, exp) => total + exp.amount, 0);
  },
  addIncome(amount, description) {
    this.incomes.push({ amount, description });
  },
  addExpense(amount, description) {
    this.expenses.push({ amount, description });
  },
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  },
  accountInfo() {
    return `${this.firstName} ${this.lastName} has a balance of $${this.accountBalance()}. Total Income: $${this.totalIncome()}, Total Expense: $${this.totalExpense()}.`;
  }
};

//     (1b)

const usersCollection = [
  { _id: 'ab12ex', username: 'Alex', email: 'alex@alex.com', password: '123123', createdAt:'08/01/2020 9:00 AM', isLoggedIn: false },
  { _id: 'fg12cy', username: 'Asab', email: 'asab@asab.com', password: '123456', createdAt:'08/01/2020 9:30 AM', isLoggedIn: true },
  { _id: 'zwf8md', username: 'Brook', email: 'brook@brook.com', password: '123111', createdAt:'08/01/2020 9:45 AM', isLoggedIn: true }
];

const productsCollection = [
  { _id: 'eedfcf', name: 'mobile phone', description: 'Huawei Honor', price: 200, ratings: [{ userId: 'fg12cy', rate: 5 }, { userId: 'zwf8md', rate: 4.5 }], likes: [] },
  { _id: 'aegfal', name: 'Laptop', description: 'MacPro: System Darwin', price: 2500, ratings: [], likes: ['fg12cy'] },
  { _id: 'hedfcg', name: 'TV', description: 'Smart TV:Procaster', price: 400, ratings: [{ userId: 'fg12cy', rate: 5 }], likes: ['fg12cy'] }
];


//      (2)

const signUp = (username, email, password) => {
  const userExists = usersCollection.some(user => user.email === email || user.username === username);
  if (userExists) {
    return 'Account already exists with this email or username.';
  }
  const newUser = {
    _id: Math.random().toString(36).substring(2, 8),
    username,
    email,
    password,
    createdAt: new Date().toLocaleString(),
    isLoggedIn: false
  };
  usersCollection.push(newUser);
  return 'Sign up successful!';
};

const signIn = (username, password) => {
  const user = usersCollection.find(u => u.username === username && u.password === password);
  if (!user) {
    return 'Invalid credentials.';
  }
  user.isLoggedIn = true;
  return `${username} is now signed in successfully.`;
};

//      (3)

const rateProduct = (productId, userId, ratingScore) => {
  const product = productsCollection.find(p => p._id === productId);
  if (!product) return 'Product not found.';
  
  const existingRating = product.ratings.find(r => r.userId === userId);
  if (existingRating) {
    existingRating.rate = ratingScore; 
  } else {
    product.ratings.push({ userId, rate: ratingScore }); 
  }
  return 'Rating applied successfully.';
};

const averageRating = productId => {
  const product = productsCollection.find(p => p._id === productId);
  if (!product) return 'Product not found.';
  if (product.ratings.length === 0) return 0;
  
  const total = product.ratings.reduce((sum, r) => sum + r.rate, 0);
  return total / product.ratings.length;
};

//      (4)

const likeProduct = (productId, userId) => {
  const product = productsCollection.find(p => p._id === productId);
  if (!product) return 'Product not found.';
  
  const likeIndex = product.likes.indexOf(userId);
  if (likeIndex === -1) {
    product.likes.push(userId); 
    return 'Product liked successfully.';
  } else {
    product.likes.splice(likeIndex, 1); 
    return 'Product unliked successfully.';
  }
};
