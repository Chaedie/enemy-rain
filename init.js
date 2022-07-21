const hero = document.querySelector('#hero__img');
const MOVE_POS = 15;
const bg = document.querySelector('#bg');

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
const enemies = document.querySelectorAll('.enemy__img');
const enemyInstance = document.createElement('div');

const enemyDown = () => {
  enemy.style.top = window.getComputedStyle(enemy).top;
  enemy.style.left = window.getComputedStyle(enemy).left;
  hero.style.left = window.getComputedStyle(hero).left;
  //
  const heroPositionLeft = parseInt(hero.style.left);
  const enemyPositionLeft = parseInt(enemy.style.left);
  const enemyPositionTop = parseInt(enemy.style.top);

  if (enemyPositionTop < 480) {
    enemy.style.top = enemyPositionTop + MOVE_POS + 'px';
  } else {
    if (heroPositionLeft - 54 < enemyPositionLeft && enemyPositionLeft < heroPositionLeft + 54) {
      return (enemy.className = 'enemy__img enemy__die');
    } else {
      enemy.style.display = 'none';
    }
    // enemy.style.top = enemyPositionTop + MOVE_POS + 'px';
    // if (enemyPositionTop > 510) {
    // }
  }
};

const enemyCreate = () => {
  enemyInstance.className = 'enemy__img';
  bg.appendChild(enemyInstance);
};

setInterval(enemyDown, 50);
// setInterval(enemyCreate, 200);
