// Un fermier vous demande de lui dire combien de pattes peuvent être comptées parmi tous se animaux. Il y'a 3 especes:
// 1 Poulet = 2 pattes
// 2 Vaches = 4 pattes
// 3 Chevaux = 4pattes
// Il faut que vous demandiew au fermier le nombre d' animaux qu'il a :
// Combien il a de poulets, combien il a de vaches et combien il a de chevaux
// Vous devez implementer une fonction qui RENVOIE le nombre total et afficher dans une balise <p> </p>

function combienDesPattes(param1, param2, param3){
    param1 = param1 * 2;
    param2 = param2 * 4;
    param3 = param3 * 4;
    
    return `<p> Le nombre total de pattes de votre animaux cest de ${param1 + param2 + param3} pattes !</p>`;

}

let poulet = parseInt(prompt('Combien des poulet vous avez ?'));
let vaches = parseInt(prompt('Combien des vaches vous avez ?'));
let chevaux = parseInt(prompt('Combien des chevaux vous avez ?'));

let totalPattes = combienDesPattes(poulet, vaches, chevaux);
document.writeln(totalPattes);