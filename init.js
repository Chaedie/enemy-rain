const hero = document.querySelector('#hero__img');
const MOVE_POS = 15;
hero.style.left = window.getComputedStyle(hero).left;

window.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowLeft') {
    hero.className = 'hero__left';
    hero.style.left = parseInt(hero.style.left) - MOVE_POS + 'px';
  } else if (e.code === 'ArrowRight') {
    hero.className = 'hero__right';
    hero.style.left = parseInt(hero.style.left) + MOVE_POS + 'px';
  }
});
