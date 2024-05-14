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
//RECUPERATION DE BANNER
let slider = document.querySelector('.banner-img');
//CREATION DU VARIABLE SLIDE EN COURS  DANS LA DIAPO
let curImageIndex = 0;


//FONCTION UPDATE BULLET POINTS
function updateDots () {
	const dotElements = document.querySelectorAll('.dot');
	dotElements.forEach ((dot, index) => {
		if (index === curImageIndex) {
			dot.classList.add ('dot_selected');
		} else {
			dot.classList.remove ('dot_selected');
		}
	});
}

updateDots();



slides.forEach(() => {
	let dotsList = document.createElement('span');
	dotsList.classList.add('dot');
	dots.appendChild(dotsList);
});

//  console.log(dots);







//AJOUT DE LA STUCTURE DU SLIDER DANS BANNER
function slideShow (index) {
	if (slides[index]) { // amelioration du code en simplifiant la ligne (i)ndex >= 0 && index < slides.length) 
		slider.src = `./assets/images/slideshow/${slides[index].image}`;
		document.querySelector('#banner p').innerHTML = slides[index].tagLine;
		
		updateDots();
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










