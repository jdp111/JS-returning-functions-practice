function guessingGame() {
    let num = Math.floor(Math.random()*100)
    let won = false
    let count = 0
    return function game(guess){
        count +=1
        if (won) return "The game is over, you already won!"
        if (guess > num) return `${guess} is too high!`
        if (guess < num) return `${guess} is too low!`
        if (guess == num){
            won = true   
            return `You win! You found ${num} in ${count} guesses.`
        }
    }
    
}

module.exports = { guessingGame };
