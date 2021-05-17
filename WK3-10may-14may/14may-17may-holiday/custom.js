// if event target is this show modal

(function() {

  var data = {
    holidayOne: {
      place: 'Samoa',
      price: 889,
      img: 'samoa.png'
    },
    holidayTwo: {
      place: 'Fiji',
      price: 759,
      img: 'fiji.png'
    },
    hotelOne: {
      name: 'Hilton',
      pricePerNight: 269,
      img: 'hilton.png'
    },
    hotelTwo: {
      name: 'Sheraton',
      pricePerNight: 249,
      img: 'sheraton.png'
    }
  };

  var holidayPlaces = document.querySelectorAll('#holiday option');
  var hotelNames = document.querySelectorAll('#hotel option');

  var holidaySelect = document.querySelector('#holiday');
  var hotelSelect = document.querySelector('#hotel');

  var holidayData = Object.values(data);
  var hotelData = Object.values(data).splice(2,2);
  // splices off two off the array starting from position 2

  var samoaPrice = Object.values(data)[0].price;
  // easier way would be to literally dig-- samoaPrice = data.holidayOne.place LOL
  var fijiPrice = Object.values(data)[1].price;
  var hiltonPrice = Object.values(data)[2].pricePerNight;
  var sheratonPrice = Object.values(data)[3].pricePerNight;

  var bookBtn = document.querySelector('.btn');

  var totalDisplay = document.querySelector('.display h1');
  // var samoaImg = document.querySelector('#samoaImg');
  // var fijiImg = document.querySelector('#fijiImg');
  // var hiltonImg = document.querySelector('#hiltonImg');
  // var sheratonImg = document.querySelector('#sheratonImg');

  var displayBox = document.querySelector('.display');
  var samoaImg = document.createElement('img');
  var fijiImg = document.createElement('img');
  var hiltonImg = document.createElement('img');
  var sheratonImg = document.createElement('img');

  var displayCongrats = document.querySelector('.display h3');


  // calls the adding total function when the button is clicked
  bookBtn.addEventListener('click', calculateTotal, false);

  // calls the updating dom function
  updateDOM();

  function updateDOM() {

    samoaImg.src = data.holidayOne.img;
    fijiImg.src = data.holidayTwo.img;
    hiltonImg.src = data.hotelOne.img;
    sheratonImg.src = data.hotelTwo.img;
    // loops that cycle through the select options and update the dom to display the place and prices
    for (var i = 0; i < holidayPlaces.length; i++) {
      holidayPlaces[i].textContent = holidayData[i].place + ' $' + holidayData[i].price;
    };

    for (var i = 0; i < hotelNames.length; i++) {
      hotelNames[i].textContent = hotelData[i].name + ' $' + hotelData[i].pricePerNight;
    };
    // possibly return the value to a new variable. could work well
  }
  // updateDOM ENDS

  function calculateTotal() {
    var getUser = document.querySelector('#nameInput').value;

    // based on the selected option calculates price :)
    if (holidaySelect.selectedIndex === 0) {
      var holidayPrice = samoaPrice;
      displayBox.appendChild(samoaImg);
      fijiImg.remove();
    } else {
      var holidayPrice = fijiPrice;
      displayBox.appendChild(fijiImg);
      samoaImg.remove();
    };

    if (hotelSelect.selectedIndex === 0) {
      var hotelPrice = hiltonPrice;
      displayBox.appendChild(hiltonImg);
      sheratonImg.remove();
    } else {
      var hotelPrice = sheratonPrice;
      displayBox.appendChild(sheratonImg);
      hiltonImg.remove();
    };

    var total = holidayPrice + hotelPrice;

    totalDisplay.textContent = 'Total Price: $' + total;
    displayCongrats.textContent = 'Have a lovely holiday, ' + getUser + '!';

  }
  // calculate total ENDS

}());
// function ready ends
