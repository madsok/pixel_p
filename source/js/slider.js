var controls = document.querySelectorAll('.slider-controls');
for (var i = 0; i < controls.length; i++){
	controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slides .slides__item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);

var nextSlide = function () {
	goToSlide(currentSlide+1);
}

var previousSlide = function () {
	goToSlide(currentSlide-1);
}

var goToSlide = function (n){
	slides[currentSlide].className = 'slides__item';
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].className = 'slides__item slides__item--active';
}

var playing = true;

var playSlideshow = function () {
	playing = true;
	slideInterval = setInterval(nextSlide,4000);
}

var next = document.querySelector('.slider-controls__next');
var previous = document.querySelector('.slider-controls__prev');

next.onclick = function (evt) {
  evt.preventDefault();
  clearInterval(slideInterval);
	nextSlide();
  playSlideshow();
};

previous.onclick = function (evt) {
  evt.preventDefault();
  clearInterval(slideInterval);
	previousSlide();
  playSlideshow();
};

playSlideshow();
