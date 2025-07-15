// EXERCISE: Compte en Banque

// J'ai 1000€ sur mon compte
// Chaque mois j'ajoute 50€
// Combien de temps me faut-il pour avoir 2000€ sur mon compte ?
// let mois = 0;

// for(let i = 1000; i <= 2000; i += 50){
    
//     document.writeln("<h1 style='color : red'> Mois " + mois + " je suis a " + i + " </h3>");
//     mois++;
// }

// mois = 0;
// let compte = 1000;

// while(compte <= 2000){
//     document.writeln("<h1 style='color : blue'> Mois " + mois + " je suis a " + compte + " </h3>");
//     mois++;
//     compte += 50;
// }

// Exercise : ni oui ni non
// demander a l'utilisateur s'il veut jouer à ni oui ni non, il ne doit répondre NI OUI NI NON, sinon on lui donne le nombre de tours qui'il a joué avant de perdre


// let domanda = '';
// let count = 0;
// while (domanda != 'oui' && domanda != 'non' && domanda != 'Oui' && domanda != 'Non'){
//     domanda = prompt("Ni oui ni non");
//     count++;
// }
// document.writeln(`<p> Vous avez fait ${count - 1} points ! </p>`);

// Exercise pairs
// a l'aide d'une boucle, parcourez les nombres de 0 à 100 et document.write ceux qui sont pair et les impairs mais pas la même couleur

for(i = 0; i <= 100; i++){
    if (i % 2 == 0){
        document.writeln("<span style ='color : red;'>" + i + "</span>");
    } else {
        document.writeln("<span style ='color : yellow; background-color : black;'>" + i + "</span>");
    }
}





