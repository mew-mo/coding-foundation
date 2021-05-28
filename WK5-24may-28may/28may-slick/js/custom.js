(function() {

  $('.slides').slick({
    accessibility: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  var moveOne = document.querySelector('#forward');

  moveOne.addEventListener('click', toNext, false);

  function toNext() {
    console.log('works');
    $('.slides').slickNext();
    // vertical can be true to create vertical option?
  }


}());
