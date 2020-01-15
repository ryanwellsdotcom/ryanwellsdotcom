"use strict";

(function () {
  var heading = document.querySelector('.masthead__title');
  var greeting = 'connect with me';
  var i = 0;
  setTimeout(function () {
    var typeEffect = function typeEffect() {
      if (i < greeting.length) {
        var min = 30;
        var max = 140;
        var speed = Math.floor(Math.random() * (max - min + 1) + min);
        heading.innerHTML += greeting.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
      }
    };

    typeEffect();
  }, 1500);
})();
//# sourceMappingURL=maps/main.js.map
