const hero = document.querySelector('#hero__img');
const bg = document.querySelector('#bg');
const enemy = document.querySelector('.enemy__img');

const MOVE_POS = 15;
let gameScore = 0;

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

const enemyCreate = () => {
  let id = ids.length;
  const enemyInstance = document.createElement('div');
  enemyInstance.id = id;
  enemyInstance.style.left = Number(Math.random() * 550) + 'px';
  enemyInstance.className = 'enemy__img';
  bg.appendChild(enemyInstance);
  ids.push(id);
  setInterval(newEnemyDown, 100, id);
};

const newEnemyDown = (id) => {
  const newEnemy = document.getElementById(`${id}`);

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
      gameScore = gameScore + 1;
      console.log('들어옴');
      setScore();
      return (newEnemy.className = 'enemy__img enemy__die');
    } else {
      newEnemy.style.display = 'none';
    }
  }
};

const score = document.querySelector('.score__span');
const setScore = () => {
  score.innerHTML = gameScore;
  console.log(gameScore);
};

const ids = [0];
enemyCreate();
setInterval(enemyCreate, 1000);
