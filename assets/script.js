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

const arrowRight = document.querySelector('.arrow_right');
const arrowLeft = document.querySelector('.arrow_left');


 //AJOUT BULLET POINTS
const dots = document.querySelector('.dots');

	slides.forEach(() => {
	let dotsList = document.createElement('span');
 	dotsList.classList.add('dot');
	dots.appendChild(dotsList);
 });

 //RECUPERATION DE BANNER
let slider = document.querySelector('.banner-img');


 //CREATION DU VARIABLE SLIDE EN COURS  DANS LA DIAPO
let curImageIndex = 0;


//AJOUT DE LA STUCTURE DU SLIDER DANS BANNER
function slideShow (index) {
	slider.src = `./assets/images/slideshow/${slides[index].image}`;
	document.querySelector('#banner p').innerHTML = slides[index].tagLine;
}


// AJOUT DE EVENT LISTENERS POUR LES FLECHES & CREATION DE LA FONCTIONS CLICK RIGHT & LEFT

rightArrow.addEventListener("click", () => {
		currentIndex +1;

		if (currentIndex >= slides.length) {
			currentIndex = 0;
		}

		slideShow(curImageIndex);
	});
	




function leftClick () {
	console.log ('click');
	curImageIndex--;
}

arrowLeft.addEventListener ('click', leftClick);







