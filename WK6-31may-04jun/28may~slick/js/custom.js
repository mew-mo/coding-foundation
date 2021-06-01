(function() {

  function vertical() {
    $('.slides').slick({
      vertical: true,
      accessibility: false,
      draggable: false,
      swipe: false,
      touchMove: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    });
    console.log('vertical should be working');
  }

  function horizontal() {
    $('.slides').slick({
      accessibility: false,
      draggable: false,
      swipe: false,
      touchMove: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    });
    console.log('horizontal is working..?');
  }

  // change the initialisation based on what slide theyre on? ormaybe thats too much and not so cool. maybe theres aninmations to be put in instead thatll make it look nice.

  var moveOne = document.querySelector('#forward'),
    moveAgain = document.querySelector('#again'),
    back = document.querySelector('#back'),
    slideArea = document.querySelector('.slides');

  moveOne.addEventListener('click', toNext, false);
  back.addEventListener('click', backOne, false);

  function toNext() {
    console.log('works');
    horizontal(slideArea);
    $('.slides').slick('slickNext');
    // vertical can be true to create vertical option?
  }

  function backOne() {
    console.log('goingback');
    // vertical(slideArea);
    $('.slides').slick('slickPrev');
  }


}());
