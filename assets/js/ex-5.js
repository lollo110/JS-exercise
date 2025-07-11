let prixTotal = parseInt(prompt("Donnez le prix pour ajouter la TVA"));

let prixTva = ((20 * prixTotal) / 100) + prixTotal;

document.writeln(`Ton prix final c'est ${prixTva}`);

let nombre1 = 10;
let nombre2 = 40;

let ne = nombre1;
nombre1 = nombre2;
nombre2 = ne;

console.log(nombre1, nombre2);

