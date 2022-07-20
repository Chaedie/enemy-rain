const hero = document.querySelector('.hero__img');

window.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowLeft') {
    hero.className = 'hero__img hero__left';
  } else if (e.code === 'ArrowRight') {
    hero.className = 'hero__img hero__right';
  }

  return console.log(e.code);
});
