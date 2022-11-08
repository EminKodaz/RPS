let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('userScore');
const computerScore_span = document.getElementById('compScore');
const scoreBoard_div = document.querySelector('.scoreBoard');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const wonAud = document.getElementById('wonAud');
const loseAud = document.getElementById('loseAud');
const drawAud = document.getElementById('drawAud');


function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "ROCK";
  if (letter === "p") return "PAPER";
  return "SCISSORS";
}

function win(userChoice, computerChoice) {
  const userChoce_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} BEATS ${convertToWord(computerChoice)}. YOU WIN!!`
  userChoce_div.classList.add('green-glow');
  setTimeout(() => userChoce_div.classList.remove('green-glow'), 300);
  playWonAudio();

}

function lose(userChoice, computerChoice) {
  const userChoce_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} LOSES TO ${convertToWord(computerChoice)}. YOU LOSE!!`
  userChoce_div.classList.add('red-glow');
  setTimeout(() => userChoce_div.classList.remove('red-glow'), 300);
  playLoseAudio();
}

function draw(userChoice, computerChoice) {
  const userChoce_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)} EQUALS ${convertToWord(computerChoice)}. IT'S A DRAW!!`
  userChoce_div.classList.add('gray-glow');
  setTimeout(() => userChoce_div.classList.remove('gray-glow'), 300);
  playDrawAudio()
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
    win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
    lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
    draw(userChoice, computerChoice);
      break;
  }
}

main();

function main() {
  rock_div.addEventListener('click', () => game("r"));

  paper_div.addEventListener('click', () => game("p"));

  scissors_div.addEventListener('click', () => game("s"));
}

function playWonAudio() {
  wonAud.play();
}

function playLoseAudio() {
  loseAud.play();
}

function playDrawAudio() {
  drawAud.play();
}





