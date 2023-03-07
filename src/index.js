import fruits from './foods';
import { choice, remove } from './helpers';

// Randomly draw a fruit from the array
let randomFruit = choice(fruits);

// Log the message “I’d like one RANDOMFRUIT, please.”
console.log(`I'd like one ${randomFruit}, please.`);

// Log the message “Here you go: RANDOMFRUIT”
console.log(`Here you go: ${randomFruit}`);

// Log the message “Delicious! May I have another?”
console.log('Delicious! May I have another?');

// Remove the fruit from the array of fruits
remove(fruits, randomFruit);

// Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”
const remainingFruits = fruits.length;
console.log(`I'm sorry, we're all out. We have ${remainingFruits} ${remainingFruits === 1 ? 'fruit' : 'fruits'} left.`);

// Run this with `npm start` and you should see something like this in your browser console:
// I'd like one 🍉, please.
// Here you go: 🍉
// Delicious! May I have another?
// I'm sorry, we're all out. We have 14 fruits left.