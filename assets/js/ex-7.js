// let age = prompt("Vous avez quelle age ?");
// let carteMembre = prompt("Vous avez une carte de membre ? (Si OUI true, si NON false)");

// if (age < 12 || carteMembre == "oui"){
//     document.writeln("Entrée gratuite");
// } else {
//     document.writeln("Paiement requis");
// }

// let connect = prompt("Vous êtes connecté ? Reponse oui ou non");
// let admin = prompt("Vous êtes admin ? Reponse oui ou non");


// if (connect == "oui" && admin == "oui"){
//    connect = true;
//    admin = true;
// } 

// if (connect == true && admin == true){
//     document.writeln("Accés autorisé");
// } 

// let color = prompt("Choix entre: rouge, orange, vert");
// let route = prompt("EST-ce que la route est dégagée (oui ou non)");

// if (route == "oui"){
//     route = true;
// } else {
//     route = false;
// }

// if (color == "vert" && route == true){
//     document.writeln("Vous pouvez passer !");
// }

// let age = prompt("Vous avez quelle age ?");
// let etud = prompt("Vous etes etudiant ?");

// if (etud == "oui"){
//     etud = true;
// } else {
//     etud = false;
// }

// if (age < 26 || etud == true){
//     document.writeln("Vous avez droit a une reduction");
// } else {
//     document.writeln("Desolee vous devez payée")
// }

// let nom = prompt("Nom d'utilisateur");
// let motDePasse = prompt("mot de passe");

// if (nom.length != '' && motDePasse.length != 0){
//     document.writeln("Connexion en cours");
// }

// let plu = prompt("Il pleut ? oui ou non");
// let vent = prompt("Il y a du vent ? oui ou non");

// if (plu == "oui" && vent == "oui"){
//     plu = true;
//     vent = true;
// }

// if (plu == true && vent == true){
//     document.writeln("Alerte météo");
// }

// let inter = prompt("La porte est verrouillée de l'intérieur ? oui ou non");
// let ext = prompt("La porte est verrouillée de l'extérieur ? oui ou non"); 

// if (inter == "oui"){
//     inter = true;
// } else {
//     inter = false;
// }

// if (ext == "oui"){
//     ext = true;
// } else {
//     ext = false;
// }

// if (inter == true ^ ext == true){
//     document.writeln("Porte sécurisée");
// } else {
//     document.writeln("Porte ouvert");

// }

// let cad = prompt("Vous avez une carte cadeaux ? oui ou non");
// let bon = prompt("Vous avez une bon de reduction ? oui ou non");

// if (cad == "oui"){
//     cad = true;
// } else {
//      cad = false;
// }

// if (bon == "oui"){
//     bon = true;
// } else {
//     bon = false;
// }

// if ( cad == true || bon == true){
//     document.writeln("Achat possible");
// } else {
//     document.writeln("Vous pouvez pas acheter");
    
// }

// let lign = prompt("Vous avez voté en ligne ? oui ou non");
// let pers = prompt("Vous avez voté en personne ? oui ou non")

// if (lign == "oui"){
//     lign = true;
// } else {
//      lign = false;
// }

// if (pers == "oui"){
//     pers = true;
// } else {
//     pers = false;
// }

// if ( lign == true ^ pers == true){
//     document.writeln("Le vote est valide");
// } else {
//     document.writeln("Votre vote n'est pas valide");
// }

let velo = prompt("Vous utilisez une vélo ? oui ou non");
let trot = prompt("Vous utilisez une trottinette ? oui ou non")

if (velo == "oui"){
    velo = true;
} else {
     velo = false;
}

if (trot == "oui"){
    trot = true;
} else {
    trot = false;
}

if (velo == true || trot == true){
    document.writeln("Vous devez portez une casque");
} else {
    document.writeln("Vous pouvez marcher sans casque");
}
