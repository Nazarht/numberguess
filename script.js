let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10)
}

function getAbsoluteDistance(number1, number2) {
    return Math.abs(number1 - number2);
}

function compareGuesses(user, computer , secret) {
    let computerDist = getAbsoluteDistance(computer , secret)
    let userDist = getAbsoluteDistance(user , secret)
    if (user > 9 || user < 0) {
        alert('You are choosing the wrong number!')
    } else if (user === secret) {
        return true;
    } else if (userDist < computerDist) {
        return true;
    } else if (userDist === computerDist) {
        return true; 
    } else if (userDist > computerDist) {
        return false;
    } 
    if (user > 9 || user < 0) {
        return 'You are choosing the wrong number!'
    }
}

function updateScore(name) {
    if (name === 'human') {
        humanScore = humanScore + 1;
    } else if (name === 'computer') {
        computerScore = computerScore + 1;
    }
}

function advanceRound() {
    currentRoundNumber = currentRoundNumber + 1;
}

console.log(compareGuesses( 10 ,9, 0))