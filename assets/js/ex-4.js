let a = prompt("Write a number !");

if (a > 0) {
  console.log("Le nombre est positif");
} else if (a < 0) {
  console.log("Le nombre est négatif");
} else {
  console.log("Le nombre est nul");
}

let age = prompt("Quelle age as tu ?");

if (age >= 18) {
  console.log("Vous êtes majeur");
} else {
  console.log("Vous êtes mineur");
}

let jour = prompt("Donnez moi un jour de la semaine");

switch (jour) {
  case "lundi":
  case "Lundi":
    console.log("lundi= debut de semaine");
    break;
  case "mardi":
  case "Mardi":
    console.log("mardi= deuxieme jour de semaine");
    break;
  case "mercredi":
  case "Mercredi":
    console.log("mercredi= troisieme jour de semaine");
    break;
  case "jeudi":
  case "Jeudi":
    console.log("jeudi= 4e jour de semaine");
    break;
  case "vendredi":
  case "Vendredi":
    console.log("vendredi= manque un jour au fin de semaine");
    break;
  case "samedi":
  case "Samedi":
    console.log("samedi= week-end");
    break;
  case "dimanche":
  case "Dimanche":
    console.log("dimanche= fin de la semaine");
    break;
  default:
    console.log("Jour non reconnu");
    break;
}

let langage = prompt("langage informatique preferee");

switch (langage) {
  case "html":
    console.log("FRONT");
    break;
  case "css":
    console.log("FRONT");
    break;
  case "js":
    console.log("BACK");
    break;
  case "php":
    console.log("BACK");
    break;
  default:
    console.log("Il est pas du langage informatique");
    break;
}

let choix = prompt("Voulez-vous une entrée, un plat ou une dessert ?");

if (choix == "entrée") {
  let entree = prompt("soupe ou salade ?");
  if (entree == "soupe" || entree == "salade") {
    console.log(entree);
  } else if (entree != "soupe" || entree != "salade") {
    console.log("Vous avez mal saisis");
  }
} else if (choix == "plat") {
  let plat = prompt("pizza o pasta ?");
  if (plat == "pizza" || plat == "pasta") {
    console.log(plat);
  } else {
    console.log("Vous avez mal saisis");
  }
} else if (choix == "dessert") {
  let dessert = prompt("gelato o sorbetto ?");
  if (dessert == "gelato" || dessert == "sorbetto") {
    console.log(dessert);
  } else {
    console.log("Vous avez mal saisis");
  }
} else {
  console.log("Vous avez mal saisis");
}

let num1 = parseInt(prompt("numero 1"));
let num2 = parseInt(prompt("numero 2"));
let oper = prompt("Quelle operation mathematiquee tu veux faire ?");

switch (oper) {
  case "addition":
    let addition = num1 + num2;
    console.log(addition);
    break;
  case "soustraction":
    let soustraction = num1 - num2;
    console.log(soustraction);
    break;
  case "moltiplication":
    let moltiplication = num1 * num2;
    console.log(moltiplication);
    break;
  case "division":
    let division = num1 / num2;
    console.log(division);
    break;
  default:
    console.log("Je connais pas cette operation");
    break;
}
