// import function


import getRandomThrow from './get-random-throw.js';
import checkResult from './check-result.js';

// get DOM elements

const playButton = document.getElementById('play-button');
const declareWinner = document.getElementById('declare-winner');
const resetButton = document.getElementById('reset-button');

let youPlayed = document.querySelector('#you-played');
let computerPlayed = document.getElementById('computer-played');
let gamesWonDisplay = document.getElementById('games-won-span');
let gamesLostDisplay = document.getElementById('games-lost-span');
let gamesTiedDisplay = document.getElementById('games-tied-span');



// const theyPlayedPaper = document.getElementById('paper');
// const theyPlayedRock = document.getElementById('rock');
// const theyPlayedScissors = document.getElementById('scissors');

// initialize state

let gamesWon = 0;
let gamesLost = 0;
let gamesTied = 0;


// user interaction

// reset button event handler


//eventListener for play button
playButton.addEventListener('click', () => {
    //console.log('buttonworks');
    // get values
    const checkedRadio = document.querySelector('input:checked');
    let userSelected = checkedRadio.value;
    let computerSelected = getRandomThrow();
    let whoWon = checkResult(userSelected, computerSelected);
   
    
    // make what user played show up on screen
   
    
    youPlayed.textContent = userSelected;
   

    // make what computer played show up on screen
     
    computerPlayed.textContent = computerSelected;
   
    // make won show up on dom
     
    declareWinner.textContent = whoWon;

    // tally scores
    if (whoWon === 'you tied') {
        gamesTied++;
        gamesTiedDisplay.textContent = gamesTied;
    }

    if (whoWon === 'you lose') {
        gamesLost++;

        gamesLostDisplay.textContent = gamesLost;
    }
    
    if (whoWon === 'you win') {
        gamesWon++;

        gamesWonDisplay.textContent = gamesWon;
    } 
});

resetButton.addEventListener('click', () => {
    
    gamesWon.textContent = 0;
    gamesLost = 0;
    gamesTied = 0;

    youPlayed.classList.add('hidden');

    
});
    