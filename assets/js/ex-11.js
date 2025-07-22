// EX 1 
let click = document.querySelector('#clickMe');
click.addEventListener('click', function(){
    alert('Bouton cliqué !');
});

// EX 2
let input = document.querySelector('#zoneTest');
input.addEventListener('keydown', function(e){
    
    console.log(e.key);
})

// EX 3

let div = document.querySelector('#carre');

div.addEventListener('click', function(){
    if (div.style.backgroundColor == 'grey'){
        div.style.backgroundColor = 'lightblue';
    } else {
        div.style.backgroundColor = 'grey';
    }
})

// EX 4

let button1 = document.querySelector('#bouton1');
let button2 = document.querySelector('#bouton2');
let button3 = document.querySelector('#bouton3');

button1.addEventListener('click', function(e){
    console.log('Tu as cliqué sur le bouton: ' + e.target.id);
})
button2.addEventListener('click', function(e){
    console.log('Tu as cliqué sur le bouton: ' + e.target.id);
})
button3.addEventListener('click', function(e){
    console.log('Tu as cliqué sur le bouton: ' + e.target.id);
})

// EX 5

document.querySelector('#formulaire').addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Formulaire intercepté !');
})

// EX 6

let survol = document.querySelector('#survol');

survol.addEventListener('mouseover', function(){
    survol.textContent = 'Coucou ';
})
survol.addEventListener('mouseout', function(){
    survol.textContent = 'Passe ta souris ici';
})

// EX 7

let option = document.querySelectorAll('.option')

option.forEach(btn => {
    btn.addEventListener('click', function(e){
        console.log(e.target.textContent);
    })
})


// EX BONUS
let couleur= document.querySelector('#bonus');
 
function couleurInfini(){
 
let rgb = [Math.round(Math.random()*255),Math.round(Math.random()*255),Math.round(Math.random()*255)];
 
    return rgb;
}
 
let codergb;
 
couleur.addEventListener('mouseover',function(){
      codergb = couleurInfini();  
      couleur.style.backgroundColor= `rgb(${codergb[0]},${codergb[1]},${codergb[2]})`;
    });
couleur.addEventListener('mouseout',function(){
    codergb = couleurInfini();
    couleur.style.backgroundColor= `rgb(${codergb[0]},${codergb[1]},${codergb[2]})`;
});