const hero = document.querySelector('#hero__img');
const bg = document.querySelector('#bg');

const MOVE_POS = 15;
let gameScore = 0;

window.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowLeft') {
    hero.className = 'hero__left';
    hero.style.left = `${hero.offsetLeft - MOVE_POS}px`;
  }

  if (e.code === 'ArrowRight') {
    hero.className = 'hero__right';
    hero.style.left = `${hero.offsetLeft + MOVE_POS}px`;
  }
});

function createEnemy() {
  let id = ids.length;
  const enemy = document.createElement('div');
  enemy.id = id;
  enemy.style.left = Number(Math.random() * 550) + 'px';
  enemy.className = 'enemy__img';
  bg.appendChild(enemy);
  ids.push(id);
  setInterval(enemyDown, 100, id);
}

function enemyDown(id) {
  const enemy = document.getElementById(`${id}`);

  if (enemy.offsetTop < 480) {
    enemy.style.top = `${enemy.offsetTop + MOVE_POS}px`;
  } else {
    if (hero.offsetLeft - 54 < enemy.offsetLeft && enemy.offsetLeft < hero.offsetLeft + 54) {
      enemy.className = 'enemy__img enemy__die';
      setTimeout(() => {
        gameScore++;
        setScore();
        bg.removeChild(enemy);
      }, 100);
    } else {
      enemy.style.display = 'none';
    }
  }
}

const score = document.querySelector('.score__span');
const setScore = () => {
  score.innerHTML = gameScore;
};

const ids = [0];
createEnemy();
setInterval(createEnemy, 1000);
