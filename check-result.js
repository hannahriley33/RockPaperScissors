

export default function checkResult(player, computer)  {
    
    if (player === computer) {
        return 'you tied'
    };

    if (player === 'rock' && computer === 'paper') {
        return 'you lose'
    };
    if (player === 'rock' && computer === 'scissors') {
        return 'you win'
    };

    if (player === 'paper' && computer === 'rock') {
        return 'you win'
    };
    if (player === 'paper' && computer === 'scissors') {
        return 'you lose'
    }  ; 
    
    if (player === 'scissors' && computer === 'paper') {
        return 'you win'
    };
    if (player === 'scissors' && computer === 'rock') {
        return 'you lose'
    };
};