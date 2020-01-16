// import function


import getRandomThrow from "/get-random-throw.js";
import checkResult from "/check-result.js";

// get DOM elements

const playButton = document.getElementById('play-button');
const declareWinner = document.getElementById('declare-winner');
const resetButton = document.getElementById('reset-button');
let youPlayed = document.querySelector('#you-played');
let computerPlayed = document.getElementById('computer-played');
let gamesWon = document.getElementById('games-won');
let gamesLost = document.getElementById('games-lost');
let gamesTied = document.getElementById('games-tied');

// const theyPlayedPaper = document.getElementById('paper');
// const theyPlayedRock = document.getElementById('rock');
// const theyPlayedScissors = document.getElementById('scissors');

// initialize state

gamesWon.value = 0;
gamesLost.value = 0;
gamesTied.value = 0;


// user interaction

// reset button event handler

resetButton.addEventListener('click', () => {
    gamesWon = 0;
    gamesLost = 0;
    gamesTied = 0;
    youPlayed.classList.add('hidden');
    
});
    
//eventListener for play button
playButton.addEventListener('click', () => {
    //console.log('buttonworks');
    // get values
    const checkedRadio = document.querySelector('input:checked');
    let userSelected = checkedRadio.value;
    let computerSelected = getRandomThrow();
 
    
    // make what user played show up on screen
   
    //console.log(checkedRadio.value);
   youPlayed.textContent = userSelected;
   //console.log(youPlayed.textContent);

    // make what computer played show up on screen
     console.log(getRandomThrow());
     console.log(computerSelected);
     computerPlayed.textContent = computerSelected;
  
    



   
    // if {
    //     youPlayed.value = computerPlayed
    //     return 'you tied';
    
    
});


// getRandomThrow();


// checkResult();