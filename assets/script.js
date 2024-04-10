const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//RECUPERATION DES FLECHES

const arrowRight = document.querySelector('.arrow_right'),
	  arrowLeft = document.querySelector('.arrow_left');


//AJOUT BULLET POINTS
const dotsList = document.querySelector('.dots');

slides.forEach(() => {
	let dot = document.createElement('span');
	dot.classList.add('dot');
	dotsList.appendChild(dot);
 });


//CREATION DU VARIABLE IMAGE ACTUELLE DANS LA DIAPO
let imageIndex = 0;

// CREATION DE LA DONCTION POUR AFFICER LE SLIDER

function showSlide (index) {
	slides.forEach ((slide, i)=> {
		slide.classList.toggle('active', i === index);
	});
}

showSlide(imageIndex);










// //AJOUT DE EVENT LISTENERS POUR LES FLECHES & CREATION DE LA FONCTIONS CLICK RIGHT & LEFT

// function rightClick () {
// 	console.log ('click')
// }

// function leftClick () {
// 	console.log ('click')
// }

// arrowRight.addEventListener ('click', rightClick );
// arrowLeft.addEventListener ('click', leftClick);











