'use strict';
/*
console.log(document.querySelector('.message').textContent);

//document.querySelector('.message').textContent = 'Correct Number'; // kjo ndryshon teksin nga Start guessing ne Correct number......

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 10;
console.log(document.querySelector('.guess').value);
*/

let SecretNumber = Math.trunc(Math.random() * 100) + 1; // kjo gjeneron random numer nga 1 deri ne 100

let score = 100; // piket ne loje fillojne nga 100 dhe ulen nga 1 pike cdo her qe gabojme
let highscore = 0; // rekordet...
//kjo shfaq numrin....
//document.querySelector('.number').textContent = SecretNumber;

// ky funkjon esht click funksion qe klikn ne guess my number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //kjo eshte kur nuk ka input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';

    //kjo eshte kur fiton
  } else if (guess === SecretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    //kjo do na shfaq numrin kur fitojme
    document.querySelector('.number').textContent = SecretNumber;

    //ndryshon ngjyren kur fiton

    document.querySelector('body').style.backgroundColor = '#60b347';

    //zmadhon kutine e numrit ne rast se fiton
    document.querySelector('.number').style.width = '30rem';

    // rekordet .... highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //kjo eshte kur input 'numri' eshte me i madh
  } else if (guess > SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    // kjo kur numri eshte me i vogel
  } else if (guess < SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// restore buton per te kthyer nga fillimi
document.querySelector('.again').addEventListener('click', function () {
  //rikthe piket
  score = 100;
  //rikthe nje random numer te ri
  SecretNumber = Math.trunc(Math.random() * 100) + 1;
  // rikthe perseri start guessing
  document.querySelector('.message').textContent = 'Start guessing...';
  //rikthe piket
  document.querySelector('.score').textContent = score;
  //rikthe pikpyetjen tek numri
  document.querySelector('.number').textContent = '?';
  //rikthe gjithcka bosh tek input
  document.querySelector('.guess').value = '';
  //rikthe ngjyrat sic ishin 'backround'
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
