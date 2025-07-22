// EX 7
let parag = document.querySelector('#cible');
let parent = parag.parentElement;
console.log(parent);
parent.style.backgroundColor = 'gray';
let parag2 = parag.nextElementSibling;
console.log(parag2);
parag2.style.fontStyle = 'italic'; 


// EX 8
let div = document.querySelector('#contenu');
div.innerHTML = '<p><strong>Bonjour</strong>!</p>';
div.textContent = '<p><strong>Bonjour</strong>!</p>';

// EX 9
let carte = document.querySelector('#carte');
let clone = carte.cloneNode(true);
clone.id= "clone";
document.body.appendChild(clone);

// EX 10
let div2 = document.createElement('div');
div2.classList('carte');
let h2 = document.createElement('h2');
h2.textContent = 'Ciao';
let image = document.createElement('img');
let p = document.createElement('p');
image.setAttribute('src', 'logo.jpg');
image.setAttribute('alt', 'logo');
p.textContent = 'Questo è un saluto';
div2.appendChild(h2);
div2.appendChild(image);
div2.appendChild(p);
document.body.appendChild(div2);

// EX 11
let div3 = document.querySelector('#zoneTest');
div3.classList.remove('invisible');
div3.classList.add('visible');
console.log(div3);
let check = div3.classList.contains('visible');
console.log(check);

// EX 12
let input = document.querySelector('#prenom');
input.value = "Jeremy"
console.log(input.value);

