// All Custom JS

// Console log the global scope
console.log(window);

// A self invoking function
(function(){
// Write all custom code here

// Setting up all of the tooltips
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip({animation: true, html: false});
	})

// Setting up popover
	$(function () {
	  $('[data-toggle="popover"]').popover()
	})

// ------------------------------------------------------------------

	var powerBtn = document.querySelector('.fa-power-off');
	var modalBtn = document.querySelector('#standByMode');
	var page = document.querySelector('body');
	var divs = document.querySelectorAll('div');
	var cols = document.querySelectorAll('.col-2');
	var icons = document.querySelectorAll('i');

	powerBtn.addEventListener('click', showModal, false);
	modalBtn.addEventListener('click', standBy, false);

	function showModal() {
		$('.modal').modal('show');
	}

	function standBy() {
		var colourChoice = document.querySelector('#selectColor').value;
		// console.log(colourChoice);
		activate(colourChoice);
	}

	function activate(color) {
		$('.modal').modal('hide');

		for (var i = 0; i < icons.length; i++) {
			icons[i].style.color = '#000';
		}

		powerBtn.style.color = color;
		page.style.background = '#000';

		for (var i = 0; i < divs.length; i++) {
			divs[i].style.background = '#000';
		}

		for (var i = 0; i < cols.length; i++) {
			cols[i].classList.add('no-border');
		}

	}

}());
// Global Wrapping Function ENDS
