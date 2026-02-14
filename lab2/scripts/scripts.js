console.log("runnninnggg");

//let correctNumber = 13;
let correctNumber = (Math.floor(Math.random() * 100 )+ 1);
let correctMessage = "Congrats !!!!! ";

let guessInput = document.querySelector("#guessInput");
let guessButton = document.querySelector("#guessButton");
let guessResult = document.querySelector("#guessResult");



let allGuesses = document.querySelector("#allGuesses");
let guessCount = document.querySelector("#guessCount");

let errorMessage = document.querySelector("#errorMessage");
let guessWin  = document.querySelector("#guessWin");

// function displayWinMessage(){
//     guessResult.textContent = correctMessage;
//     guessResult.style.color = "orange";
// }
guessCount = 0;

allGuesses.textContent = "All guesses : "

document.body.style.backgroundColor = "pink";

guessButton.addEventListener("click",function(){
    if(guessCount == 6)
    {
        guessWin.textContent = " You lost";
    }
    if(guessCount > 6)
    {
        guessWin.textContent = " Why are you still going ?";
        return;
    }
    else if(guessInput.value < 1 || guessInput.value > 100)
    {
        errorMessage.textContent = "Number should be between 1 and 100";
    }
    else if(guessInput.value == correctNumber ){
        guessResult.textContent = correctMessage;
       // guessResult.style.color = "green";
        if(guessCount < 6 )
        {
            guessResult.textContent += "You've guessed in less than 7 attempts !";
            guessResult.style.color = "green";
        }
        guessCount.textContent = guessCount + "guesses"
    }
    else if(guessInput.value > correctNumber){
        guessResult.textContent = "Too High";
        guessResult.style.color = "blue";
    }
    else{
        guessResult.textContent = "Too Low";
        guessResult.style.color = "orange";
    }

    allGuesses.textContent += guessInput.value + " ";
    guessCount++;
});

