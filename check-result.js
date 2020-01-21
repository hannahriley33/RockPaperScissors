

export default function checkResult(player, computer){
    
    if (player === computer) {
        return 'you tied';
    }

    if (player === 'rock' && computer === 'scissors') {
        return 'you win';
    }

    else if (player === 'paper' && computer === 'rock') {
        return 'you win';
    }
    
    else if (player === 'scissors' && computer === 'paper') {
        return 'you win';
    }

    else {
        return 'you lose';
    }
}