
// function start(){
//     let choice = document.querySelector('input[name="choice"]:checked').value;
//     if(choice == "C"){
//         chocolateGame();
//     }
//     else 
//     {
//         flowersGame();
//     }
// }
// start();

var audio = new Audio('mp3/Animalcrossing.mp3');
audio.play();


let flowInputBtn = document.querySelector("#flowInputBtn");

let rulesButton = document.querySelector("#rulesButton");


let wordSearchText = document.querySelector("#wordSearchText");
let lettersFound = document.querySelector("#lettersFound");
let lettersFoundCount = 0;

let letterCount = document.querySelector("#letterCount");
let letterCpt= 0;

let displayLetters = document.querySelector("#displayLetters");
let foundLetters = [];
let letter = document.querySelector("#letter");

let winText = document.querySelector("#winText");

let flowerText = document.querySelector("#flowerText");
let rulesText = document.querySelector("#rulesText");
let rulesText2 = document.querySelector("#rulesText2");
let rulesText3 = document.querySelector("#rulesText3");

let attemptsText =document.querySelector("#attemptsText");
let wordText = document.querySelector("#wordText");
//const urlParams = new URLSearchParams(window.location.search);
//const valName = urlParams.get('valName');

//  $.ajax({ 
//         url: 'index.html', 
//         dataType: 'html', 
//         success: function(response) { 
            
//             let ValName = $(response).find('#valName').clone();
//         }
//         });
 
// let valName =  localStorage.getItem("val-Name");
let valName =  localStorage.getItem("val-Name");
console.log("valName = " + valName);

let bgColor = localStorage.getItem("bg-Color");
document.querySelector("body").style.backgroundColor = bgColor;

let dico = ["interpersonal" , "sweetheart" , "attraction", "friends", "intimacy", "emotion", "friendship", "passion", "affection", "relationship", "Maeva"];
let attempts = 10;
rulesButton.addEventListener("click",function(){
        rulesButton.style.visibility = "hidden";
        rulesText.textContent = " Let's go then !";
        wordLength.textContent = " Your word has " + word.length + " letters ";
        letter.textContent = " The letter numero " + (randLetter + 1) + " is '" + word[randLetter] +"'";
    });

flowerText.textContent = " Let's make a bouquet for 🌷" + valName + "🌷";
rulesText2.textContent = " Here are the rules to the Game :";
rulesText3.textContent = "Press Ok if it is all clear.";
rulesText.textContent = "This is a hangman game (le jeu du pendu). \n\tYou have 10 attempts (Since I'm a very Nice girl) . You'll need to guess a word, letter by letter knowing its length.\n By the fifth attempt (5e) you can also enter the word if you think that you have found it. ";
let r = (Math.floor(Math.random() * dico.length));
//rulesText.textContent = " Your word has a lenght of " + dico[r].length;
let word = dico[r];
let wordLength = document.querySelector("#wordLength");
console.log(word);
let randLetter = (Math.floor(Math.random() * word.length));

//function flowersGame(){

    flowInputBtn.addEventListener("click",function start() {
        // alert("test flower bon");
        // let valName = document.querySelector("#valName").value;
    
        // J'aurai besoin de creer un array qui va me servir de dictionnaire je peux y mettre une 50aine de mots ca devrait suffire.
        console.log("works");
        
        attemptsText.textContent = " You have " + attempts + " attempts remaining";
        let flowInput = document.querySelector("#flowInput").value;
        wordText.textContent = "Enter a letter you think is in the word : "; 
        let bool = 0;
        let bool2 = 0;
        if(attempts == 0)
        {
            winText.textContent = " You have failed to find the word. Reload the page to play again";
        }
        else if(attempts > 0)
        {
            if (flowInput == word && attempts < 6)
            {
                //Winnnnn
                bool2 = 1;
            }
            for (let i = 0; i < word.length; i++) {
                if(flowInput == word[i])
                {
                    wordSearchText.textContent = "'" + flowInput + "' is in the word good job !";
                    foundLetters.push(flowInput);
                    foundLetters.push( "p=" + (i + 1));
                    lettersFoundCount++;
                    letterCpt++;
                    bool = 1;
                }
                console.log(word[i]);
            }
            
            if(bool == 0)
                wordSearchText.textContent = flowInput + " is not in the word. Keep going !";
            if(bool2 != 1){
                letterCount.textContent = " There is " + letterCpt + "  " + flowInput + ".";
                lettersFound.textContent = " You have found " + lettersFoundCount + " letters " + "there is " + (word.length - lettersFoundCount) + " remaining ";
                displayLetters.textContent = " Letters found (followed by their position): ";
                for (let i = 0; i < foundLetters.length; i++) {
                    displayLetters.textContent += foundLetters[i] + ", ";
                }
            }

            if(bool2 == 1 && attempts != 0){
                winText.textContent = "Congratulations ! You've found the word \n Therefore , you have won " + (10 - attempts) + " flowers for " + valName + "'s bouquet 💐"  ;
            }

           
            attempts--;
        }
        
            
        
    });
    
//}

//flowersGame();


function chocolateGame(){
    alert("test choco bon");
    //Je fais spawn beaucoup de chocolat et il doit les attrapper
}

function rulesOk(){
    alert("rulesOk test");
    
}


