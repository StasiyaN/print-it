const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
		"altText": "Impressions tous formats en boutique et en ligne",
		"dotColor": "aqua"

	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		"altText": "Tirages haute définition grand format pour vos bureaux et events",
		"dotColor": "pink"

	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
		"altText": "Grand choix de couleurs de CMJN aux pantones",
		"dotColor": "paleturquoise"

	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
		"altText": "Autocollants avec découpe laser sur mesure",
		"dotColor": "lavender"
	}
]
//RECUPERATION DES FLECHES
const arrowRight = document.querySelector('.arrow_right');
const arrowLeft = document.querySelector('.arrow_left');
//AJOUT BULLET POINTS
const dots = document.querySelector('.dots');
//CREATION DU VARIABLE SLIDE EN COURS  DANS LA DIAPO
let curImageIndex = 0;
//RECUPERATION DE BANNER + SUPPRESION DE ALT INITIAL + AJOUT DE NOUVEAU ATL
let slider = document.querySelector('.banner-img');
slider.removeAttribute('alt');
slider.setAttribute('alt', 'Impressions tous formats en boutique et en ligne');


//FONCTION POUR COLORER LES DOTS A CHAQUE SLIDE
function colorDots () {
	const dotElements = document.querySelectorAll('.dot');
	dotElements.forEach ((dot, index) => {
		if (index === curImageIndex) {
			dot.style.backgroundColor = slides[index].dotColor;
		} else {
			dot.style.backgroundColor = 'white';
		}
	});
}

colorDots();



slides.forEach(() => {
	let dotsList = document.createElement('span');
	dotsList.classList.add('dot');
	dots.appendChild(dotsList);
});



//AJOUT DE LA STUCTURE DU SLIDER DANS BANNER
function slideShow (index) {
	if (slides[index]) { // amelioration du code en simplifiant la ligne (i)ndex >= 0 && index < slides.length) 
		slider.src = `./assets/images/slideshow/${slides[index].image}`;
		document.querySelector('#banner p').innerHTML = slides[index].tagLine;		
		colorDots();
	}
}

// AJOUT DE EVENT LISTENERS POUR LES FLECHES & CREATION DE LA FONCTIONS CLICK RIGHT & LEFT

arrowRight.addEventListener('click', () => {
	curImageIndex += 1;
	
	if (curImageIndex >= slides.length) {
		curImageIndex = 0; 
	}
	
	slideShow(curImageIndex);
});

arrowLeft.addEventListener('click', () => {
	curImageIndex -= 1;
	
	if (curImageIndex < 0) {
		curImageIndex = slides.length - 1; 
	}
	
	slideShow(curImageIndex);
});










