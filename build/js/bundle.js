(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
  // Don't touch
  svg4everybody(); // End don't touch

  require('./main.js');

  require('./scrollReveral.js');
}); // remove preloader

$(window).on('load', function () {
  $('html').addClass('page-loaded');
});

},{"./main.js":2,"./scrollReveral.js":3}],2:[function(require,module,exports){
"use strict";

//Header BURGER
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.header__link').click(function (event) {
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
  });
}); //SLIDER review

$('.review__slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  adaptiveHeight: true,
  speed: 1000,
  responsive: [{
    breakpoint: 775,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      adaptiveHeight: true
    }
  }]
});

},{}],3:[function(require,module,exports){
"use strict";

//ScrollReveral
ScrollReveal().reveal('.truck__img', {
  duration: 4000,
  origin: 'left',
  distance: '400px',
  scale: 1.5
});
ScrollReveal().reveal('h2', {
  duration: 500,
  origin: 'top',
  distance: '50px',
  scale: 0.5
});
ScrollReveal().reveal('.info__images, .form__content', {
  duration: 1000,
  origin: 'left',
  distance: '500px',
  scale: 0.5
});
ScrollReveal().reveal('.info__content', {
  duration: 1500,
  origin: 'right',
  distance: '500px',
  scale: 0.5
});
ScrollReveal().reveal('.box-1 ', {
  duration: 500,
  scale: 0.5
});
ScrollReveal().reveal('.box-2, .form__button', {
  duration: 1000,
  scale: 0.5
});
ScrollReveal().reveal('.box-3', {
  duration: 1500,
  scale: 0.5
});
ScrollReveal().reveal('.box-4', {
  duration: 2000,
  scale: 0.5
});

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
