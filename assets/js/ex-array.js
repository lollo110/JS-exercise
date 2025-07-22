// ex1

let prenomArray = ["Lorenzo","Maddie","Sandra","Valerio"];

console.log(prenomArray[0], prenomArray[prenomArray.length - 1])

// ex2

let fruitArray = ["apple","orange","pear"];
fruitArray.push("watermelon");
console.log(fruitArray);

// ex3

let villeArray = ["Roma","Paris","New York"];
villeArray.unshift("Boston");
console.log(villeArray);

// ex4

let colorArray = ["red","blue","green","black","white"];
colorArray.shift();
console.log(colorArray);

// ex5

let animalArray = ["dog","cat","rabbit","wolf","fish"];
animalArray.splice(2,1);
console.log(animalArray);

// ex6

let lettreArray = ["a","b","d"];
lettreArray.splice(2,0,"c");
console.log(lettreArray);

// ex7

let numberArray = [5,10,20,24,78,5];
let newNumberArray = numberArray.slice(2,5);
console.log(newNumberArray);

// ex8

let paysArray = ["France","Italy","England","Germany","Faroe Island", "Canada"];
console.log(paysArray.length);

// ex9

let prenomArray2 = ["Lorenzo","Maddie","Sandra","Valerio"];

for(let i = 0; i < prenomArray2.length; i++){
    document.writeln(`<p> ${prenomArray2[i]} </p>`);
}

// ex10

let nullArray = [];
nullArray.unshift("mela","susina");
nullArray.push("banana","lampone","pesca");
nullArray.shift();
nullArray.splice(2,1);

console.log(nullArray);


