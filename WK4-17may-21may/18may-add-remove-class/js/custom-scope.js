// All custom js here

  console.log('working....');
  // This is global

  // iife immediately invoked functional expression
  (function() {

    var cloudObject = {};
    console.log(cloudObject);

    // Setup click events
    cloudObject.getBtnAC.onclick = function () {
      // calling the functions
      startAnimation();
    };

    cloudObject.getBtnBC.onclick = function () {
      // calling the functions
      endAnimation();
    };

    // *** Vars below are inside the function scope // Hidden from external code
    // Use the cloud object to access them
    function setupElements () {
      var getDiv = document.querySelector('.holder');
      var getBtnA = document.querySelector('#addClassAnimation');
      var getBtnB = document.querySelector('#removeClassAnimation');

      cloudObject.getDivC = getDiv;
      cloudObject.getBtnAC = getBtnA;
      cloudObject.getBtnBC = getBtnB;
    }

    console.log(cloudObject);

    setupElements();

    function startAnimation () {
      console.log('working vanilla js....');
      // Adding a class with vanilla .js
      cloudObject.getDivC.classList.add('animation');
    }

    function endAnimation () {
      console.log('working vanilla js....');
      // Removing a class with vanilla .js
      cloudObject.getDivC.classList.remove('animation');
    }

  }());
  // iife ENDS
