(function() {

// <!-- Custom javascript --

  // ***Task A: Add comments to the code below.

  // ***Task B: Complete the code so when the user clicks the update button, the DOM/HTML is
  // updated. Use Pseudo Code

  // *** Task C:  Create a class that when added to the body with javascript, turns the entire UI
  // into a dark theme. This will occur when he #dark button is clicked. You will need both .js
  // and css for this.

  // ******** task b pseudo code *********
  // 1. grab dom elements that will be updated, create variables for them
  // 2. update their styles to match the user's inputs
  // 3. be happy with what you have done

  var cloudObject = {
    doc: false,
    div: false,
    divFont: false,
    userFColor: false,
    userFSize: false,
    userBGColor: false,
    form: false,
    updateBtn: false,
    darkBtn: false
  };

  function getElements () {
    // get update button and dark button from dom
    var getUpdateButton = document.getElementById('update');
    var getDarkButton = document.querySelector('#dark');
    // grabs the dom elements that will be updated from user input :)
    var getDiv = document.querySelector('.holder');
    var getType = document.querySelector('.holder h1');
    // grabs the elements that will be updated
    var page = document.querySelector('body');
    var form = document.querySelector('.form-inputs');

    // updates vars to cloudObject for use outside of this function!
    cloudObject.doc = page;
    cloudObject.div = getDiv;
    cloudObject.divFont = getType;
    cloudObject.form = form;
    cloudObject.updateBtn = getUpdateButton;
    cloudObject.darkBtn = getDarkButton;

    cloudObject.updateBtn.addEventListener('click', updateDiv, false);

    cloudObject.darkBtn.addEventListener('click', updateDark, false);
  }

  // UPDATE BUTTON ---------------------------------------
  // when the update button is clicked, run this function
  function updateDiv () {
    // grabs the users inputs into each field
    var getFontColor = document.getElementById('selectFontColor').value;
    var getBackgroundColor = document.getElementById('selectBackgroundColor').value;
    var getFontSize = document.getElementById('selectFontSize').value;

    // puts the variables into the cloud object in case of wanting to use them outside of this function :D
    cloudObject.userFColor = getFontColor;
    cloudObject.userFSize = getFontSize;
    cloudObject.userBGColor = getBackgroundColor;

    // logs the values that the user inputted :)
    console.log(cloudObject.userFColor);
    console.dir(cloudObject.userBGColor);
    console.log(cloudObject.userFSize);

    // updates the dom to adjust according to the users inputs
    cloudObject.divFont.style.color = cloudObject.userFColor;
    cloudObject.divFont.style.fontSize = cloudObject.userFSize;
    cloudObject.div.style.backgroundColor = cloudObject.userBGColor;
  }
  // update div ENDS

  // DARK BUTTON ----------------------------
  function updateDark () {
    // updates the elements by adding the css class
    cloudObject.doc.classList.add('dark');
  }
  // dark update ENDS

  // runs the getting elements function
  getElements();

}());
// IIFE ENDS!
