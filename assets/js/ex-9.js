// EX 1

let h1 = document.getElementById('titrePrincipal');
h1.setAttribute('id','nouveauTitre');
h1.setAttribute('style','color: bleu');
h1.textContent = 'Bonjour Jeremy !';

console.log(h1);

// EX 2

let li = document.querySelectorAll('.li');
console.log(li);
li.forEach((li) => {
    li.style.color = 'green';
    li.style.border = 'solid black';
    li.style.width = '10%';
    li.style.listStyleType = 'none';
})

// EX 3

let image = document.querySelector('#logo');
let i = image.getAttribute('src');
console.log(i);
let a = image.getAttribute('alt');
console.log(a);
image.setAttribute('width', '50%');

// EX 4

let p = document.createElement('p');
let section = document.querySelector('#zoneAjout');
console.log(section);

console.log(p);
p.textContent = 'Texte ajouté en JavaScript';
section.appendChild(p);

// EX 5

let navig = document.querySelector('nav > ul');
console.log(navig);
let li3 = document.createElement('li');
li3.setAttribute('class','li2');
console.log(li3);
li3.textContent = 'Blog';
navig.append(li3);

// EX 6

let demande = prompt('Combien de plantes as-tu ?');
let p2 = document.createElement('p');


if (demande == 0){
    p2.textContent = 'Plantes: aucune';
} else if(demande > 0 && demande <=3){
    p2.textContent = 'Tu en as quelques-unes, cool !';
} else {
    p2.textContent = 'Une vrai jungle chez toi !';
}

document.body.appendChild(p2);

