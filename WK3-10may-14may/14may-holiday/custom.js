
(function() {

  var data = {
    holidayOne: {
      place: 'Samoa',
      price: 889
    },
    holidayTwo: {
      place: 'Fiji',
      price: 759
    },
    hotelOne: {
      name: 'Hilton',
      pricePerNight: 269
    },
    hotelTwo: {
      name: 'Sheraton',
      pricePerNight: 249
    }
  };

  var holidayPlaces = document.querySelectorAll('#holiday option');
  var hotelNames = document.querySelectorAll('#hotel option');

  var holidayData = Object.values(data);
  var hotelData = Object.values(data).splice(2,2);
  // splices off two off the array starting from position 2

  var bookBtn = document.querySelector('.btn');

  for (var i = 0; i < holidayPlaces.length; i++) {
    holidayPlaces[i].textContent = holidayData[i].place + ' $' + holidayData[i].price;
  };

  for (var i = 0; i < hotelNames.length; i++) {
    hotelNames[i].textContent = hotelData[i].name + ' $' + hotelData[i].pricePerNight;
  };
  // possibly return the value to a new variable. could work well

  var getHolidayPrice = parseInt(document.querySelector('#holiday option').textContent.split('$')[1]);
  var getHotelPrice = parseInt(document.querySelector('#hotel option').textContent.split('$')[1]);
  // try grab price from object data more directly wow wow !! wow >L<

  function calculateTotal() {
    var total = getHolidayPrice + getHotelPrice;
    console.log(total);
    // alert('heres the total price! $' + total)
  };

  bookBtn.addEventListener('click', calculateTotal, false);

}());
// function ready ends
