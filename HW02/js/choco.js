let q1Text = document.querySelector("#q1Text");
let q2Text = document.querySelector("#q2Text");
let q3Text = document.querySelector("#q3Text");
let q4Text = document.querySelector("#q4Text");
let q5Text = document.querySelector("#q5Text");
let q6Text = document.querySelector("#q6Text");
let q7Text = document.querySelector("#q7Text");
let q8Text = document.querySelector("#q8Text");
let q9Text = document.querySelector("#q9Text");
let q10Text = document.querySelector("#q10Text");
let q11Text = document.querySelector("#q11Text");
let q12Text = document.querySelector("#q12Text");
let q13Text = document.querySelector("#q13Text");
let q14Text = document.querySelector("#q14Text");
let q15Text = document.querySelector("#q15Text");
let scoreText = document.querySelector("#scoreText");

let winText = document.querySelector("#winText");
let winText2 = document.querySelector("#winText2");
let winText3 = document.querySelector("#winText3");

var audio = new Audio('mp3/Animalcrossing.mp3');
audio.play();


function timer(){
    var sec = 60;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML=sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            chocolateGame();
            return;
        }
        else if(sec > 0 && bool == 1)
        {
            clearInterval(timer);
            return;
        }
    }, 1000);
}


let bool = 0;

let chocoText = document.querySelector("#chocoText");
// let rulesText = document.querySelector("#rulesText");
// let attemptsText =document.querySelector("#attemptsText");
let wordText = document.querySelector("#wordText");

let valName =  localStorage.getItem("val-Name");
console.log("valName = " + valName);

let bgColor = localStorage.getItem("bg-Color");
document.querySelector("body").style.backgroundColor = bgColor;

let rulesButton = document.querySelector("#rulesButton");
let submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click",chocolateGame);

let score = 0;

chocoText.textContent = " Let's get some chocolate for " + valName;
rulesText.textContent = "This is a quiizz that youll need to answer in less than 1 minutes (60 sec)." +  " Press Ok if it is all clear.";

rulesButton.addEventListener("click",function(){
        rulesButton.style.visibility = "hidden";
        rulesText.textContent = " Let's go then !";
        wordLength.textContent = "Remaining time:  ";
        timer();
    });

function chocolateGame(){
    
    alert("test choco bon");
    let q1 = document.querySelector("#q1").value;
    if(q1 == 27)
    {
        score += 20;
        q1Text.textContent = "Correct ";
        q1Text.style.color = "green";
    }
    else
    {
        q1Text.textContent = " Wrong ";
        q1Text.style.color = "red";
    }
    let q2 = document.querySelector("input[name=q2]:checked").value;
    if(q2 == 28 )
    {
        score += 20;
        q2Text.textContent = "Correct ";
        q2Text.style.color = "green";
    }
    else
    {
        q2Text.textContent = " Wrong ";
        q2Text.style.color = "red";
    }

    let q3 = document.querySelector("#q33").value;
    if(q3 == 6)
    {
        score += 20;
        q3Text.textContent = "Correct ";
        q3Text.style.color = "green";
    }
    else
    {
        q3Text.textContent = " Wrong ";
        q3Text.style.color = "red";
    }

    let q4 = document.querySelector("input[name=q4]:checked").value;
    if(q4 == 3.1415 )
    {
        score += 20;
        q4Text.textContent = "Correct ";
        q4Text.style.color = "green";
    }
    else
    {
        q4Text.textContent = " Wrong ";
        q4Text.style.color = "red";
    }

    let q5 = document.querySelector("input[name=q5]:checked").value;
    if(q5 == 3 )
    {
        score += 20;
        q5Text.textContent = "Correct ";
        q5Text.style.color = "green";
    }
    else
    {
        q5Text.textContent = " Wrong ";
        q5Text.style.color = "red";
    }

    let q6 = document.querySelector("#q66").value;
    if(q6 == "Lome")
    {
        score += 20;
        q6Text.textContent = "Correct ";
        q6Text.style.color = "green";
    }
    else
    {
        q6Text.textContent = " Wrong ";
        q6Text.style.color = "red";
    }

    let q7 = document.querySelector("input[name=q7]:checked").value;
    if(q7 == "Macron" )
    {
        score += 20;
        q7Text.textContent = "Correct ";
        q7Text.style.color = "green";
    }
    else
    {
        q7Text.textContent = " Wrong ";
        q7Text.style.color = "red";
    }

    let q8 = document.querySelector("input[name=q8]:checked").value;
    if(q8 == "America" )
    {
        score += 20;
        q8Text.textContent = "Correct ";
        q8Text.style.color = "green";
    }
    else
    {
        q8Text.textContent = " Wrong ";
        q8Text.style.color = "red";
    }

    let q9 = document.querySelector("#q99").value;
    if(q9 == "bad bunny" || q9 ==  "Bad Bunny" || q9 == "BAD BUNNY")
    {
        score += 20;
        q9Text.textContent = "Correct ";
        q9Text.style.color = "green";
    }
    else
    {
        q9Text.textContent = " Wrong ";
        q9Text.style.color = "red";
    }

    let q10 = document.querySelector("#q10").value;
    if(q10 == "Porto Novo" || q10 == " porto novo " || q10 == "PORTO NOVO")
    {
        score += 20;
        q10Text.textContent = "Correct ";
        q10Text.style.color = "green";
    }
    else
    {
        q10Text.textContent = " Wrong ";
        q10Text.style.color = "red";
    }

    let q11 = document.querySelector("#q11").value;
    if(q11 == 14)
    {
        score += 20;
        q11Text.textContent = "Correct ";
        q11Text.style.color = "green";
    }
    else
    {
        q11Text.textContent = " Wrong ";
        q11Text.style.color = "red";
    }

    let q12 = document.querySelector("#q12").value;
    if(q12 == "Maeva" || q12 == "maeva" || q12 == "MAEVA")
    {
        score += 20;
        q12Text.textContent = "Correct ";
        q12Text.style.color = "green";
    }
    else
    {
        q12Text.textContent = " Wrong ";
        q12Text.style.color = "red";
    }

    let q13 = document.querySelector("#q13").value;
    if(q13 == "Marc" || q13 == "Mark")
    {
        score += 20;
        q13Text.textContent = "Correct ";
        q13Text.style.color = "green";
    }
    else
    {
        q13Text.textContent = " Wrong ";
        q13Text.style.color = "red";
    }

    let q14 = document.querySelector("#q14").value;
    if(q14 == 2)
    {
        score += 20;
        q14Text.textContent = "Correct ";
        q14Text.style.color = "green";
    }
    else
    {
        q14Text.textContent = " Wrong ";
        q12Text.style.color = "red";
    }

    let q15 = document.querySelector("#q12").value;
    if(q15 == "whatever")
    {
        score += 50;
        q15Text.textContent = "Correct ";
        q15Text.style.color = "green";
    }
    else
    {
        q15Text.textContent = " Wrong ";
        q15Text.style.color = "red";
    }
    let chocolate = 9;

    scoreText.textContent = " Score is " + score;
    winText.textContent = " You have won " + score + "M$ (Mae Dollars) ";
    winText2.textContent = " That makes " + Math.floor(score/chocolate) + " chocolates won ! " ;
    for (let index = 0; index < score/chocolate ; index++) {
       
        winText3.textContent += "🍫 ";
        
    }
    
    bool = 1;
}

// function flowersGame(){
//     // alert("test flower bon");
//    // let valName = document.querySelector("#valName").value;
//     chocoText.textContent = " Let's get some chocolate for " + valName;
//     rulesText.textContent = " Here are the rules to the Game :\n\t This is a hangman game (le jeu du pendu). \n\tYou have 10 attempts (Since I'm a very Nice girl) . You'll need to guess a word, letter by letter knowing its length.\n Press Ok if it is all clear.";
    
//     rulesButton.addEventListener("click",rulesOk);
//     // J'aurai besoin de creer un array qui va me servir de dictionnaire je peux y mettre une 50aine de mots ca devrait suffire.
//     let r = (Math.floor(Math.random() * dico.length));
//     //rulesText.textContent = " Your word has a lenght of " + dico[r].length;
//     attemptsText.textContent = " You have " + attempts + " attempts remaining";
//     wordText.textContent = "Enter a letter you think is in the word : "; 

// }




// function rulesOk(){
//     alert("rulesOk test");
    
// }


