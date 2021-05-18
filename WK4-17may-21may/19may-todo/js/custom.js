(function() {

  var addBtn = document.querySelector('#add');
  var outputArea = document.querySelector('.user-list');

  function appendItem () {

    var newItem = document.createElement('p');
    var xSpan = document.createElement('span');
    var userInput = document.querySelector('#addToDoItem').value;

    xSpan.innerHTML = 'x';
    xSpan.style.float = 'right';

    newItem.textContent = '• ' + userInput;
    newItem.appendChild(xSpan);
    outputArea.appendChild(newItem);

    xSpan.addEventListener('click', deleteItem, false);

  }

  function deleteItem (e) {
    e.target.parentNode.remove();
  }

  addBtn.addEventListener('click', appendItem, false);

}());
// IIFE ENDS!
