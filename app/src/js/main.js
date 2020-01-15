(() => {
  const heading = document.querySelector('.masthead__title');
  const greeting = 'connect with me';
  let i = 0;

  setTimeout(() => {
    const typeEffect = () => {
      if (i < greeting.length) {
        const min = 30;
        const max = 140;
        let speed = Math.floor(Math.random() * (max - min + 1) + min);

        heading.innerHTML += greeting.charAt(i);
        i++;

        setTimeout(typeEffect, speed);
      }
    };
    typeEffect();
  }, 1500);
})();
