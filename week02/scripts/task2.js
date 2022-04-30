/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myname= 'Jesus Sanchez'


// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = myname;

// Step 3: declare and instantiate a variable to hold the current year
const currentYear = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = currentYear;


// Step 5: declare and instantiate a variable to hold the name of your picture
const imageProfile = 'images/photo.jpg';
const imageAlt = 'My profile image';

// Step 6: copy your image into the "images" folder


// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', imageProfile);
document.querySelector('img').setAttribute('alt', imageAlt);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favoritefood = ['Pizza', 'Burguer', 'Lasagna'];


// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = favoritefood;

// Step 3: declare and instantiate a variable to hold another favorite food
const anotherfood = 'Fried fish'

// Step 4: add the variable holding another favorite food to the favorite food array
favoritefood.push(anotherfood);

// Step 5: repeat Step 2
document.querySelector('#food').textContent = favoritefood;

// Step 6: remove the first element in the favorite foods array
favoritefood.shift();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favoritefood;

// Step 8: remove the last element in the favorite foods array
favoritefood.pop();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favoritefood;


