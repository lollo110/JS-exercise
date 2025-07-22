// Ex 1

let prenom = "Lorenzo Paolo";
let age = 27;
let villeNaissance = "Roma Capitale";

document.writeln(
  `<p> Je m'appelle ${prenom}, j'ai ${age} ans et j'habite à ${villeNaissance} </p>`
);

// EX 2

let longueur = parseInt(prompt("Longueur rectangle ?"));
let largeur = parseInt(prompt("Largeur rectangle ?"));

let tot = longueur * largeur;

document.writeln(`<p>La surface de votre rectangle est de ${tot} cm²</p>`);

// EX 3

let nombre = prompt(
  "Donnez moi un nombre, je te dirai s'il est pair ou impair"
);

if (nombre % 2 == 0) {
  document.writeln(`<p> ${nombre} est pair`);
} else {
  document.writeln(`<p> ${nombre} est impair`);
}

// EX 4

function direBonjour(prenom) {
  return `<p> Bonjour ${prenom} </p>`;
}

let buongiorno = direBonjour(prenom);
document.writeln(buongiorno);

// EX 5

let nmb1 = parseInt(prompt("numero 1"));
let nmb2 = parseInt(prompt("numero 2"));
let maggOMin;

function whoIsBigger(nb1, nb2) {
  if (nb1 > nb2) {
    maggOMin = `<p> ${nb1} c'est plus grand que ${nb2} </p>`;
  } else if (nb2 > nb1) {
    maggOMin = `<p> ${nb2} c'est plus grand que ${nb1} </p>`;
  } else if (nb1 == nb2) {
    maggOMin = `<p> ${nb2} et ${nb1} sont égaux </p>`;
  }

  return maggOMin;
}

let theBigger = whoIsBigger(nmb1, nmb2);
document.writeln(theBigger);

// EX 6

function calculOperation(n1, n2, calc) {
  let resultat;

  if (calc == "+") {
    resultat = n1 + n2;
  } else if (calc == "-") {
    resultat = n1 - n2;
  } else if (calc == "*") {
    resultat = n1 * n2;
  } else if (calc == "/") {
    resultat = n1 / n2;
  } else {
    resultat = "L'opearation n'existe pas !";
  }

  return resultat;
}

let num1 = parseInt(prompt("C'est le quelle votre premier numero ?"));
let num2 = parseInt(prompt("C'est le quelle votre deuxieme numero ?"));
let operation = prompt(
  "Quelle operation vous voulez faire ? Possibilité : +,-,*,/"
);

let resultatFinal = calculOperation(num1, num2, operation);
document.writeln(
  `Le resultat de ${num1} ${operation} ${num2} est ${resultatFinal}`
);

// EX 7

function tuPeuxVoter(n) {
  if (n >= 18) {
    return true;
  } else {
    return false;
  }
}

age = prompt("Vous avez quelle âge ?");
let vote = tuPeuxVoter(age);
document.writeln(`<p>Vous pouvez voter ? ${vote}</p>`);

// EX 8

let heure = prompt("C'est quelle heure ?");
let saluto;
function education(h) {
  if (h >= 6 && h <= 11) {
    saluto = "Bonjour";
  } else if (h >= 12 && h <= 17) {
    saluto = "Bon aprées-midi";
  } else if (h >= 18 && h <= 22) {
    saluto = "Bonsoir";
  } else {
    saluto = "Bonne nuit"
  }
  return saluto;
}

let salutation = education(heure);
document.writeln(`<p> ${salutation}, c'est ${heure} h !`);

// EX 9

let demandeTemperature = parseInt(
  prompt(
    "Vous voulez voir la difference entre Celsius et Fahrenheit ? Donnez mopi une temperature en Celsius :)"
  )
);
let fahrenheit;

function calculeFahr(celsius) {
  fahrenheit = celsius * 1.8 + 32;
  return `<p> ${celsius} Celsius devient: ${fahrenheit} Fahrenheit ! </p>`;
}

let callFahr = calculeFahr(demandeTemperature);
document.writeln(callFahr);

// EX 10

let ht = parseFloat(prompt("Donnez moi le prix hors tax"));
let tva = parseFloat(prompt("Donnez moi le taxe sur le valeur ajoutée"));
let ttc;

function getTtc(par1, par2) {
  ttc = par1 + (par1 * par2) / 100;
  return ttc;
}

let ttcFinal = getTtc(ht, tva);
document.writeln(`Vous devriez payer: ${ttcFinal}`);
