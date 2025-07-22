let animal = {
    espece: "chien",
    age: 5,
    estDomestic: "oui"
};

console.log(animal);

console.log(animal.espece);

animal.espece = "chat";
console.log(animal);

animal.couleur = "orange";
console.log(animal);

delete animal.estDomestic;
console.log(animal);

for (let key in animal) {
  document.writeln("<p>" + key + " : " + animal[key] + "</p>");
}

let voiture = {
    marque: "opel",
    annee: 2015,
    presentation: function(){
        document.writeln(`<p>Cette voiture est une ${this.marque} de ${this.annee} <p>`)
    }
};
voiture.presentation();

let ecole = {
    nom: "Innocenzo XII",
    classe: {
        nbEleves: 25,
        info: function(){
            document.writeln(`<p>Les élèves sont ${this.nbEleves}</p>`)
        }
    }
}

ecole.classe.info();

let produits = [
    {nom: "sauce tomate", prix: 2.69 + '€'},
    {nom: "pasta", prix: '1.54€'}
];

console.log(produits[0].prix)

for (const element of produits) {
    console.log(element.nom);
}