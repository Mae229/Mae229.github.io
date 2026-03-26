let playerNameButtton = document.querySelector("#playerNameButtton");
playerNameButtton.addEventListener("click",compatibilityGame);

let names = document.querySelector("#names");
let names2 = document.querySelector("#names2");

let score = Math.floor(Math.random() * 101);

function compatibilityGame(){
    
    let valName = document.querySelector("#valName").value;
    let playerName = document.querySelector("#playerName").value;

    names.textContent = valName + " and " + playerName+ " have a compatibility score of  " + score + "%";
    if(score < 20)
    {
        var audio = new Audio('mp3/Over.mp3');
        audio.play();
        names2.textContent = "L'amour c'est pour les chiens de toutes facons";
    }
    else if(score < 60){
        var audio = new Audio('mp3/enbri.mp3');
        audio.play();
        names2.textContent = "Ouuuuuuu";
    }
    else if(score > 80){
        var audio = new Audio('mp3/raindance.mp3');
        audio.play();
        names2.textContent = " Perfect match !!" ;
    }
}