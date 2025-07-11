// Lorenzo Paolo Cilurzo

let prenom = "Lorenzo Paolo";
let age = 27;
let comprension_js = true;
let taille = 46.05;

document.writeln(`<p> Je m'appelle ${prenom}, j'ai ${age} ans , ma comprehension du javascript est evaluée à ${comprension_js} et la taille de la statue de la liberté est de ${taille} métres. </p>`);
console.log(typeof prenom);
console.log(typeof age);
console.log(typeof comprension_js);
console.log(typeof taille);

let prenom_uti = prompt("Comment t'appelle tu ?");
let age_uti = prompt("Quelle age as tu ?");

document.writeln(`Bienvenue ${prenom_uti}, Vous avez ${age_uti} aujourd'hui ! Bon anniversaire`);