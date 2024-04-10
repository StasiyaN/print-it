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

 //RECUPERATION DE BANNER
let banner = document.getElementById('banner');

//SUPRESSION DE L IMAGE STADIC DANS LE BANNER

banner.firstElementChild.remove ();
banner.firstElementChild.remove ();




slides.forEach ((slide, index) => {
	//CREATION DE VARIABLES POUR CREER LE CONTENU DU SLIDER
	let slideBlock = document.createElement('div');
	slideBlock.classList.add ('slide-wrapper');

	let slideImage = document.createElement('img');
	slideImage.classList.add ('slider-img');
	slideImage.src = `./assets/images/slideshow/${slide.image}`;
	slideImage.alt = 'Banner Print-it';

	let tagLine = document.createElement ('p');
	tagLine.innerHTML = slide.tagLine;

	//AJOUT DE NOUVELLES VARIABLES DANS LE BANNER/SLIDE BLOCK
	slideBlock.appendChild(slideImage);
	slideBlock.appendChild(tagLine);

	banner.appendChild(slideBlock);
});



console.log (banner.children);








//RECUPERATION DES FLECHES

// const arrowRight = document.querySelector('.arrow_right'),
// 	  arrowLeft = document.querySelector('.arrow_left');


// //AJOUT BULLET POINTS
// const dots = document.querySelector('.dots');

// slides.forEach(() => {
// 	let dotsList = document.createElement('span');
// 	dotsList.classList.add('dot');
// 	dots.appendChild(dotsList);
//  });



// //CREATION DU VARIABLE IMAGE ACTUELLE DANS LA DIAPO
// let imageIndex = 0;

// // CREATION DE LA FONCTION POUR AFFIChER LE SLIDER



// // //AJOUT DE EVENT LISTENERS POUR LES FLECHES & CREATION DE LA FONCTIONS CLICK RIGHT & LEFT

//  function rightClick () {
// 	console.log ('click')
// }

// function leftClick () {
// 	console.log ('click')
// }



// arrowRight.addEventListener ('click', rightClick );
// arrowLeft.addEventListener ('click', leftClick);











//
// 











