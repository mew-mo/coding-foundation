
// jquery version

// $(document).ready(function(){
//
//   console.log('work! WORK!');
//
//   $('#addClassNavy').click(function () {
//     $('.holder').addClass('navy');
//   });
//
//   $('#removeClassNavy').click(function () {
//     $('.holder').removeClass('navy');
//   });
//
//   $('#addClassAnimation').click(function () {
//     $('.holder').addClass('animation');
//   });
//
//   $('#removeClassAnimation').click(function () {
//     $('.holder').removeClass('animation');
//   });
//
// });

// ------------------------------------------------------------------

// gotchillsfrommystupidity

// vanilla version!!!

(function() {

  var cloudObject = {};
  console.log(cloudObject);

  var addNavyBtn = document.querySelector('#addClassNavy');
  var removeNavyBtn = document.querySelector('#removeClassNavy');
  var addAnimationBtn = document.querySelector('#addClassAnimation');
  var removeAnimationBtn = document.querySelector('#removeClassAnimation');
  var theHolder = document.querySelector('.holder');
  // if these variables above were in the function below, then you'd be able to access them via the cloud object :)

  // function grabElements(){
  //   cloudObject.getNavyBtn = getNavyBtn;
  // }

  // grabElements();
  console.log(cloudObject);

  addNavyBtn.addEventListener('click', function(){
    theHolder.classList.add('navy');
  }, false);

  removeNavyBtn.addEventListener('click', function(){
    theHolder.classList.remove('navy');
  }, false);

  addAnimationBtn.addEventListener('click', startAnimation, false);

  removeAnimationBtn.addEventListener('click', stopAnimation, false);

  function startAnimation(){
    theHolder.classList.add('animation');
  }

  function stopAnimation(){
    theHolder.classList.remove('animation');
  }

}());
// iife ENDS

// 1. get the button
// 2. add a click event to the button
// 3. log the click or var
// 4. get the .holder element
// 5. add the .navy class to .holder :D
