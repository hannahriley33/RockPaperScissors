// Computer Throw
// Create a getRandomThrow function in a module which should be called get-random-throw.js

// This function needs to generate a random numbers and triage that into returning rock, paper, or scissors accordingly.
   
   
export default getRandomThrow=() => {
    
    
    const theCorrectAnswer = Math.floor(Math.random()*3);


    if (theCorrectAnswer === 0) {
        return 'rock';
    }

    if (theCorrectAnswer === 1) {
        return 'paper';
    }
    return 'scissors';

}

 function checkResult(player, computer) {
    
    if (player === computer) {
        return 'you tied'
    }

    if (player === 'rock' && computer === 'paper') {
        return 'you lose'
    }
    if (player === 'rock' && computer === 'scissors') {
        return 'you win'
    }

    if (player === 'paper' && computer === 'rock') {
        return 'you win'
    }
    if (player === 'paper' && computer === 'scissors') {
        return 'you lose'
    }   
    
    if (player === 'scissors' && computer === 'paper') {
        return 'you win'
    }
    if (player === 'scissors' && computer === 'rock') {
        return 'you lose'
    }
};