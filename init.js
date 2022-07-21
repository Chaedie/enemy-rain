const hero = document.querySelector('#hero__img');
const bg = document.querySelector('#bg');
const enemy = document.querySelector('.enemy__img');

const MOVE_POS = 15;

window.addEventListener('keydown', (e) => {
  hero.style.left = window.getComputedStyle(hero).left;
  if (e.code === 'ArrowLeft') {
    hero.className = 'hero__left';
    hero.style.left = parseInt(hero.style.left) - MOVE_POS + 'px';
  }

  if (e.code === 'ArrowRight') {
    hero.className = 'hero__right';
    hero.style.left = parseInt(hero.style.left) + MOVE_POS + 'px';
  }
});

const enemyDown = () => {
  enemy.style.top = window.getComputedStyle(enemy).top;
  enemy.style.left = window.getComputedStyle(enemy).left;
  hero.style.left = window.getComputedStyle(hero).left;

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
  }
};

const enemyCreate = () => {
  let id = ids.length;
  const enemyInstance = document.createElement('div');
  enemyInstance.id = id;
  enemyInstance.style.left = Number(Math.random() * 550) + 'px';
  enemyInstance.className = 'enemy__img';
  bg.appendChild(enemyInstance);
  ids.push(id);
  console.log(ids);
  console.log(ids.length);
  setInterval(newEnemyDown, 100, id);
};

const newEnemyDown = (id) => {
  const newEnemy = document.getElementById(`${id}`);

  console.log(`#${id.toString()}`);
  console.log(id);

  newEnemy.style.top = window.getComputedStyle(newEnemy).top;
  newEnemy.style.left = window.getComputedStyle(newEnemy).left;
  hero.style.left = window.getComputedStyle(hero).left;

  const heroPositionLeft = parseInt(hero.style.left);
  const enemyPositionLeft = parseInt(newEnemy.style.left);
  const enemyPositionTop = parseInt(newEnemy.style.top);

  if (enemyPositionTop < 480) {
    newEnemy.style.top = enemyPositionTop + MOVE_POS + 'px';
  } else {
    if (heroPositionLeft - 54 < enemyPositionLeft && enemyPositionLeft < heroPositionLeft + 54) {
      return (newEnemy.className = 'enemy__img enemy__die');
    } else {
      newEnemy.style.display = 'none';
    }
  }
};

// setInterval(enemyDown, 50);
// setInterval(enemiesDown, 50);
const ids = [0];
enemyCreate();
setInterval(enemyCreate, 1000);
