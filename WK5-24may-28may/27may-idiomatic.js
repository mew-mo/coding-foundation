(function() {

  // editing formative b js to match the idiomatic js style guide
  // https://github.com/rwaldron/idiomatic.js/

  // storing the image srcs in an object for later use
  var images = {
    birthday: 'assets/birthday.jpg',
    christmas: 'assets/christmas.jpg',
    valentines: 'assets/valentines.jpg'
  };
  // images object ENDS

  // app object STARTS
  var app = {
    // pulling update button from dom
    getUpdateBtn: document.querySelector('#submit'),

    // pulling variables that are to be updated from the dom
    getCard: document.querySelector('.card'),
    getImg: document.querySelector('.card img'),
    getFont: document.querySelector('.sketch'),
    getBorder: document.querySelector('.noBorder'),
    getMessage: document.querySelector('.sketch'),

    // creating variables that will update to hold the users inputs in the future
    userImg: false,
    userBg: false,
    userFont: false,
    userBorder: false,
    userMessage: false,

    // initialisation function
    init: function() {
      // calls the updateCard function when clicked
      app.getUpdateBtn.addEventListener( 'click', app.updateCard, false );
    },
    // init function ENDS

    updateCard: function() {
      // calls all of the update functions
      app.updateImg();
      app.updateBackground();
      app.updateFont();
      app.updateBorder();
      app.updateMessage();
    },
    // updateCard function ENDS

    updateImg: function () {
      // sets the image to the users selection
      app.userImg = document.querySelector('#image').value;
      // conditional for the updating to the users selection
      if ( app.userImg === 'christmas' ) {
        app.getImg.src = images.christmas;
      } else if ( app.userImg === 'valentines' ) {
        app.getImg.src = images.valentines;
      } else if ( app.userImg === 'birthday' ) {
        app.getImg.src = images.birthday;
      }
    },
    // updateImg function ENDS

    updateBackground: function() {
      // sets the background to the users selection
      app.userBg = document.querySelector('#background').value;
      // conditionals for the updating to the users selection
      if ( app.userBg === 'celadon' ) {
        app.getCard.classList.add('celadonBackground');
      } else {
        app.getCard.classList.remove('celadonBackground');
      }

      if ( app.userBg === 'graphite' ) {
        app.getCard.classList.add('graphiteBackground');
      } else {
        app.getCard.classList.remove('graphiteBackground');
      }

      if ( app.userBg === 'rose' ) {
        app.getCard.classList.add('roseBackground');
      } else {
        app.getCard.classList.remove('roseBackground');
      }
    },
    // updateBackground function ENDS

    updateFont: function() {
      // sets the font to the users selection
      app.userFont = document.querySelector('#font').value;
      // conditionals for the updating to the users selection
      if ( app.userFont === 'handwriting' ) {
        app.getFont.classList.add('handwriting');
      } else {
        app.getFont.classList.remove('handwriting');
      }

      if ( app.userFont === 'sketch' ) {
        app.getFont.classList.add('sketch');
      } else {
        app.getFont.classList.remove('sketch');
      }

      if ( app.userFont === 'print' ) {
        app.getFont.classList.add('print');
      } else {
        app.getFont.classList.remove('print');
      }
    },
    // updateFont function ENDS

    updateBorder: function() {
      // sets the border to the users selection
      app.userBorder = document.querySelector('#border').value;
      // conditionals for the updating to the users selection
      if ( app.userBorder === 'none' ) {
        app.getBorder.classList.add('noneBorder');
      } else {
        app.getBorder.classList.remove('noneBorder');
      }

      if ( app.userBorder === 'thin' ) {
        app.getBorder.classList.add('smallBorder');
      } else {
        app.getBorder.classList.remove('smallBorder');
      }

      if ( app.userBorder === 'thick' ) {
        app.getBorder.classList.add('bigBorder');
      } else {
        app.getBorder.classList.remove('bigBorder');
      }

      if ( app.userBorder === 'filled' ) {
        app.getBorder.classList.add('filledBorder');
      } else {
        app.getBorder.classList.remove('filledBorder');
      }
    },
    // updateBorder function ENDS

    updateMessage: function() {
      app.userMessage = document.querySelector('#message').value;
      app.getMessage.innerHTML = app.userMessage;
    }
    // updateMessage function ENDS
  };
  // app object ENDS

  // starts the code by calling the initialisation function
  app.init();

} ());
// iife ENDS
