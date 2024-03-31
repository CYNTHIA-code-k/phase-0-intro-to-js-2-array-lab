// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

console.log(cats); // Output: ["Milo", "Otis", "Garfield"]
//


beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat(name) {
  cats.push(name);
}

// Test the function
console.log("Before appending:", cats);
destructivelyAppendCat("Ralph");
console.log("After appending:", cats);
//

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Test the function
console.log("Before prepending:", cats);
destructivelyPrependCat("Bob");
console.log("After prepending:", cats);

//const cats = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveLastCat() {
  cats.pop();
}

// Test the function
console.log("Before removing the last cat:", cats);
destructivelyRemoveLastCat();
console.log("After removing the last cat:", cats);


//
function destructivelyRemoveFirstCat() {
  // Use shift to remove the first cat from the cats array
  cats.shift();
}

// Test the function
console.log("Before removing the first cat:", cats);
destructivelyRemoveFirstCat();
console.log("After removing the first cat:", cats);

//
function appendCat(name) {
  // Use concat to create a new array with the additional cat appended
  return cats.concat(name);
}

// Test the function
console.log("Before appending a cat:", cats);

console.log("New array after appending a cat:", newCatsArray);
console.log("Original cats array remains unchanged:", cats)

//
function prependCat(name) {
 
 return [name].concat(cats);
}


console.log("Before prepending a cat:", cats);
console.log("New array after prepending a cat:", newCatsArray);
console.log("Original cats array remains unchanged:", cats);

//
function removeLastCat() {
  
  return cats.slice(0, -1);
}


console.log("Before removing the last cat:", cats);

console.log("New array after removing the last cat:", newCatsArray);
console.log("Original cats array remains unchanged:", cats);
function removeFirstCat() {
  
  return cats.slice(1);
}

console.log("Before removing the first cat:", cats);
const newCatsArray = removeFirstCat();
console.log("New array after removing the first cat:", newCatsArray);
console.log("Original cats array remains unchanged:", cats);




