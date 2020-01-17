// Computer Throw
// Create a getRandomThrow function in a module which should be called get-random-throw.js

// This function needs to generate a random numbers and triage that into returning rock, paper, or scissors accordingly.
   
   
export default function getRandomThrow() {
    
    
    const theCorrectAnswer = Math.floor(Math.random()*3);


    if (theCorrectAnswer === 0) {
        return 'rock';
    }

    if (theCorrectAnswer === 1) {
        return 'paper';
    }
    return 'scissors';

};

 