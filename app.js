// import function


import getRandomThrow from "/get-random-throw.js";
import {checkResult} from "/get-random-throw.js";

// get DOM elements

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const playButton = document.getElementById('play-button');
const declareWinner = document.getElementById('declare-winner');
const resetButton = document.getElementById('reset-button');

// initialize state
let gameCount= 0;
let gameWins = 0;
let gameLosses = 0;
let gameTies = 0;

// user interaction

// reset button event handler

resetButton.addEventListener('click', () => {
    let (gameCount === 0);
    let (gameWins === 0);
    let (gameLosses === 0);
    let (gameTies === 0);
    
});











getRandomThrow();