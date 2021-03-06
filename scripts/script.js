// JavaScript Document

var currentSlide = 1;

function showSlide(slideIndex) {
  const slides = document.getElementsByClassName('carouselImgs');
  if (slideIndex > slides.length) { currentSlide = 1 }
  if (slideIndex < 1) { currentSlide = slides.length }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[currentSlide - 1].style.display = 'flex'
}


function nextSlide() {
  showSlide(currentSlide += 1);
}

function previousSlide() {
  showSlide(currentSlide -= 1);
}

window.onload = function () {
  showSlide(currentSlide);
  document.getElementById('prev').addEventListener('click', function () {
    previousSlide();
  })
  document.getElementById('next').addEventListener('click', function () {
    nextSlide();
  })
}


// bron: https://dev.to/saravanakumarputta/js-snippets-carousel-slider-using-plain-html-css-and-js-5fjc//


var clickMenu = function(target) {
    var changeMenuText = target.querySelector(".menu_text");
    var currentMenuText = target.querySelector(".menu_text").innerHTML;
    var menuSection = document.getElementById("menu_section").style;
    var carouselSection = document.getElementById("carousel_section").style;
    var articleSection = document.getElementById("article_section").style;

    if (currentMenuText == "Menu") {
        changeMenuText.innerHTML = "Close";
        menuSection.display = "block";
        carouselSection.display ="none";
        articleSection.display ="none";
        
    }
    
    else {
        changeMenuText.innerHTML = "Menu"
        menuSection.display = "none";
        carouselSection.display ="block";
        articleSection.display ="block";
    }
}