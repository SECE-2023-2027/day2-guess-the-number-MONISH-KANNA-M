
// const header = document.getElementById('header');

// const menus = document.getElementsByClassName('menu');

// const paragraphs = document.getElementsByTagName('p');

// const highlighted = document.querySelector('.highlight');

// const menuItems = document.querySelectorAll('.menu');

// const items = document.querySelectorAll('.menu-item');
// items.forEach(item => {
//   item.style.color = 'blue';
// });

// //read/write
// console.log(d.textcontent)
// i.textcontent = ""

// //styling
// i.style.color="red";

// i.classList.add("qw")
// i.classList.toggle("as1")

// cosnt aa=document.createElement("h2")




// console.log(header)
// console.log(menus)
// console.log(paragraphs)
// console.log(highlighted)
// console.log(menuItems)
// console.log(items)

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '150px';

    if (score > highscore) {
      highscore = score;
      document.getElementById('highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.getElementById('score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.getElementById('score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start Guessing ...');
  document.getElementById('score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '100px';
});
