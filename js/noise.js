(function() {
  'use strict';

  var bits = ['<div class="light"></div>', '<div class="dark"></div>'];

  function addBit() {
    document.getElementById('noise').insertAdjacentHTML('beforeend', bits[randomize(0, 1)]);
  }

  // Returns a random integer between min (included) and max (included)
  function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (var i = 0; i < 100000; i++) {
    addBit();
  }

}());
