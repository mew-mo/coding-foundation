// PSEUDOCODE
// 1. get bootstrap modal, place in html - make sure its in properly
// 2. place holiday / hotel info into data object (as string..?)
// 3. use event object to open modal on img click; ex. if target = samoaimg open modal
// 4. wow cool!

(function() {
  // its not called iffy but IIFE lol but still pronounced iffy :D
  var data = {
    holidayOne: {
      place: 'Samoa',
      price: 889,
      img: 'samoa.png',
      info: 'Our warm, friendly culture and breathtaking scenery makes Samoa the perfect Pacific Island destination for your next holiday or quick break. Only three and a half hours flight from Auckland, Samoa is renowned for its natural beauty, genuine hospitality and stunning adventures. Plan your next special trip to Samoa and create special memories to last a lifetime.'
    },
    holidayTwo: {
      place: 'Fiji',
      price: 759,
      img: 'fiji.png',
      info: 'The heart of the South Pacific, Fiji is blessed with 333 tropical islands that are the home to happiness. Fiji, a country in the South Pacific, is an archipelago of more than 300 islands. It\'s famed for rugged landscapes, palm-lined beaches and coral reefs with clear lagoons.'
    },
    hotelOne: {
      name: 'Hilton',
      pricePerNight: 269,
      img: 'hilton.png',
      info: 'Contemporary rooms with floor-to-ceiling windows offer balconies, flat-screen TVs, WiFi, and tea and coffeemaking facilities. Bathrooms feature separate showers and baths. Some rooms feature harbour views. Suites add separate living areas.'
    },
    hotelTwo: {
      name: 'Sheraton',
      pricePerNight: 249,
      img: 'sheraton.png',
      info: 'Featuring floor-to-ceiling windows, the modern, airy rooms have free Wi-Fi, flat-screen TVs, minifridges, and tea and coffeemaking facilities. Upgraded rooms add city views. Studios offer balconies and kitchenettes; suites come with separate living rooms. Room service is available 24/7.'
    }
  };
  var page = document.querySelector('body');

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

  var displayBox = document.querySelector('.display');
  var displayCongrats = document.querySelector('.display h3');

// creating the image elements in the dom, rather than just having them in the html from the get go
  var samoaImg = document.createElement('img');
  var fijiImg = document.createElement('img');
  var hiltonImg = document.createElement('img');
  var sheratonImg = document.createElement('img');

  var modalTitle = document.querySelector('#infoModalLabel');
  var modalText = document.querySelector('.modal-body p');

  // calls the adding total function when the button is clicked
  bookBtn.addEventListener('click', calculateTotal, false);

  // calls the updating dom function
  updateDOM();

  function updateDOM() {

    // appending the source of the images as they are in the data object! yay
    samoaImg.src = data.holidayOne.img;
    fijiImg.src = data.holidayTwo.img;
    hiltonImg.src = data.hotelOne.img;
    sheratonImg.src = data.hotelTwo.img;

    // giving the images the attributes to trigger the bootstrap modals- this can't be hard coded into the html since the images are only being created in the js
    samoaImg.setAttribute('data-bs-toggle', 'modal', );
    samoaImg.setAttribute('data-bs-target', '#infoModal');

    fijiImg.setAttribute('data-bs-toggle', 'modal');
    fijiImg.setAttribute('data-bs-target', '#infoModal');

    hiltonImg.setAttribute('data-bs-toggle', 'modal');
    hiltonImg.setAttribute('data-bs-target', '#infoModal');

    sheratonImg.setAttribute('data-bs-toggle', 'modal');
    sheratonImg.setAttribute('data-bs-target', '#infoModal');

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

  // event object; looks for the user to click particular images and will update and show the modal accordingly.
  page.addEventListener('click', function(e){
    if (e.target == samoaImg) {
      modalTitle.innerHTML = 'About Samoa';
      modalText.textContent = data.holidayOne.info;
    } else if (e.target == fijiImg) {
      modalTitle.textContent = 'About Fiji';
      modalText.textContent = data.holidayTwo.info;
    } else if (e.target == hiltonImg) {
      modalTitle.textContent = 'About The Hilton';
      modalText.textContent = data.hotelOne.info;
    } else if (e.target == sheratonImg) {
      modalTitle.textContent = 'About The Sheraton';
      modalText.textContent = data.hotelTwo.info;
    };
    // using 'e' or 'event' to pass through your event object is best practise!!!!
  }, false);

}());
// function ready ends
