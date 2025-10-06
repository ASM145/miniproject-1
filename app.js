let score=JSON.parse(localStorage.getItem('score'));
   if (!score) {
    score = {
      wins: 0,
      loses: 0,
      ties: 0
  }
}
let isautoplaying=false;
let intervalId;
function autoPlay(){
  if(!isautoplaying){
  
  intervalId = setInterval(() => {
    const userMove = getComputerMove(); 
    game(userMove);
  }, 1000);
  isautoplaying=true;
  document.querySelector('.auto-play-button').innerText="Stop";

}else {
  clearInterval(intervalId);
  isautoplaying=false;
  document.querySelector('.auto-play-button').innerText="Auto Play";
     }
}




update_score()
   
   function update_score()
   {
    document.querySelector('.js-score').innerHTML = 
  `Wins: ${score.wins} Losses: ${score.loses} Ties: ${score.ties}`;
   }
function getComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return 'rock';
  } else if (randomNumber < 2 / 3) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function game(userMove) {
  let result;
  const computermove = getComputerMove();

  if (userMove === computermove) {
    result = 'Tie';
    score.ties += 1;
  } else if (
    (userMove === 'rock' && computermove === 'scissors') ||
    (userMove === 'paper' && computermove === 'rock') ||
    (userMove === 'scissors' && computermove === 'paper')
  ) {
    result = 'You win';
    score.wins += 1;
  } else {
    result = 'Computer wins';
    score.loses += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  update_score();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
    <img src="images/${userMove}.png" class="move-icon"> &nbsp;
    <img src="images/${computermove}.png" class="move-icon">
    Computer`;
}

   




    
    function reset()
    {
      score.wins=0;
      score.loses=0;
      score.ties=0;
      localStorage.removeItem('score');
      update_score();
      
    }