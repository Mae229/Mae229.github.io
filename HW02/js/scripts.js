//Variables pour mes inputs



// display
let names = document.querySelector("#names");


//Boutons
let valNameButton = document.querySelector("#valNameButton");
let playerNameButtton = document.querySelector("#playerNameButtton");
let bgColorButton = document.querySelector("#bgColorButton");
let startflowButton = document.querySelector("#startflowButton");
let startChocoButton = document.querySelector("#startChocoButton");


valNameButton.addEventListener("click",saveValName);
playerNameButtton.addEventListener("click",displayNames);
bgColorButton.addEventListener("click",setBgColor);

var audio = new Audio('mp3/Animalcrossing.mp3');
audio.play();

function saveValName(){
    let valName = document.querySelector("#valName").value;
    // alert("input = " + valName);
    return valName;
}

function displayNames(){
    let valName = document.querySelector("#valName").value;
    let playerName = document.querySelector("#playerName").value;
    var audio2 = new Audio('mp3/ouu.mp3');
    audio2.play();
    names.textContent = playerName + " is playing for " + valName;
    
}
startflowButton.addEventListener("click",function(){
    let valName = saveValName();
    localStorage.setItem("val-Name",valName);
    window.location.href = 'Flowers.html';
    let bgColor = setBgColor();
    localStorage.setItem("bg-Color",bgColor);
});

startChocoButton.addEventListener("click",function(){
    let valName = saveValName();
    localStorage.setItem("val-Name",valName);
    window.location.href = 'Chocolate.html';
    let bgColor = setBgColor();
    localStorage.setItem("bg-Color",bgColor);
});


function setBgColor(){
    let bgColor = document.querySelector("#bgColor").value;
    let color;

    if(bgColor == "blue")
        color = "lightblue";
    else if(bgColor == "red")
        color = "rgb(247, 54, 54)";
    else if (bgColor == "yellow")
        color = "rgb(227, 216, 64)";
    else if(bgColor == "green")
        color = "rgb(155, 230, 123)"
    else if(bgColor == "black")
        alert("Error reload the page and change color");
    else
        color = bgColor;
    document.querySelector("body").style.backgroundColor = color;
    return bgColor;
}




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

// //Flowers

// let dico = ["interpersonal" , "sweetheart" , "attraction", "friends", "intimacy", "emotion", "friendship", "passion", "affection", "relationship", "Maeva"];
// let attempts = 10;
// function flowersGame(){
//     // alert("test flower bon");
//     let valName = document.querySelector("#valName").value;
//     flowerText.textContent = " Let's make a bouquet for " + valName;
//     rulesText.textContent = " Here are the rules to the Game :\n\t This is a hangman game (le jeu du pendu). \n\tYou have 10 attempts (Since I'm a very Nice girl) . You'll need to guess a word, letter by letter knowing its length.\n Press Ok if it is all clear.";
    
//     rulesButton.addEventListener("click",rulesOk);
//     // J'aurai besoin de creer un array qui va me servir de dictionnaire je peux y mettre une 50aine de mots ca devrait suffire.
//     let r = (Math.floor(Math.random() * dico.length));
//     //rulesText.textContent = " Your word has a lenght of " + dico[r].length;
//     attemptsText.textContent = " You have " + attempts + " attempts remaining";
//     wordText.textContent = "Enter a letter you think is in the word : "; 

// }


// function chocolateGame(){
//     alert("test choco bon");
//     //Je fais spawn beaucoup de chocolat et il doit les attrapper
// }

// function rulesOk(){
//     alert("rulesOk test");

// }







