const hero = document.querySelector('#hero__img');
const MOVE_POS = 15;
const bg = document.querySelector('#bg');
const enemyInstance = document.createElement('div');

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

const enemy = document.querySelector('.enemy__img');

const enemyDown = () => {
  if (parseInt(enemy.style.top) > 510) {
    enemy.style.display = 'none';
  }

  enemy.style.top = window.getComputedStyle(enemy).top;
  console.log(enemy.style.top);
  enemy.style.top = parseInt(enemy.style.top) + MOVE_POS + 'px';
  console.log(enemy.style.top);
  // while (parseInt(enemy.style.top) < 510) {
  //   enemy.style.top -= parseInt(enemy.style.top) - MOVE_POS + 'px';
  // }
};

const enemyCreate = () => {
  enemyInstance.className = 'enemy__img';
  bg.appendChild(enemyInstance);
};

setInterval(enemyDown, 50);
setInterval(enemyCreate, 200);
