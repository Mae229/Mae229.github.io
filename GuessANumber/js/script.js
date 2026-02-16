
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

let randomNumber;
let attempts = 0;
let gamesWon = 0;
let gamesLost = 0;

initializeGame();

function initializeGame() {
   randomNumber = Math.floor(Math.random() * 99) + 1;
   console.log("randomNumber: " + randomNumber);
   attempts = 0;

   document.querySelector("#resetBtn").style.display = "none";

   document.querySelector("#guessBtn").style.display = "inline";

   let playerGuess = document.querySelector("#playerGuess");
   playerGuess.focus();
   playerGuess.value = "";
   playerGuess.disabled = false;

   let feedback = document.querySelector("#feedback");
   feedback.textContent = "";

   document.querySelector("#attempts").textContent = "Number of attempts : " + attempts;

   document.querySelector("#guesses").textContent = "";
   
   updateScore();
}

function updateScore() {
    let scoreElement = document.querySelector("#score");
    if (!scoreElement) {
        scoreElement = document.createElement("div");
        scoreElement.id = "score";
        document.querySelector("#main").appendChild(scoreElement);
    }
    scoreElement.textContent = "Games Won: " + gamesWon + " | Games Lost: " + gamesLost;
}

function checkGuess()
{
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player guess: " + guess);
    
    if(guess === "" || isNaN(guess))
    {
        feedback.textContent = "Please enter a valid number";
        feedback.style.color = "red";
        return;
    }
    
    guess = parseInt(guess);
    
    if(guess > 99)
    {
        feedback.textContent = "Error: Number cannot be higher than 99!";
        feedback.style.color = "red";
        return;
    }
    if(guess < 1)
    {
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }
    
    attempts++;
    console.log("Attempts: " + attempts);
    feedback.style.color = "orange";
    
    if(guess == randomNumber)
    {
        feedback.textContent = "🎉 Congratulations! You guessed the number correctly in " + attempts + " attempt(s)!";
        feedback.style.color = "darkgreen";
        gamesWon++;
        gameOver();
    }
    else
    {
        document.querySelector("#guesses").textContent += guess + " ";
        document.querySelector("#attempts").textContent = "Number of attempts : " + (attempts);
        
        if(attempts == 7)
        {
            feedback.textContent = "You Lost! The number was " + randomNumber + ".";
            feedback.style.color = "red";
            gamesLost++;
            gameOver();
        }
        else if(guess > randomNumber)
        {
            feedback.textContent = "Your guess was too high!";
        }
        else
        {
            feedback.textContent = "Your guess was too low!";
        }
    }
}

function gameOver()
{
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    let playerGuess = document.querySelector("#playerGuess");
    
    guessBtn.style.display = "none";
    playerGuess.disabled = true;
    
    resetBtn.style.display  = "inline";
    
    updateScore();
}
