let button = document.querySelector("#submit").addEventListener("click",gradeQuizz);
//let q3Btn = document.querySelector("#q3Btn").addEventListener("click",gradeQuizz);
let q1Text = document.querySelector("#q1Text");
 let q2Text = document.querySelector("#q2Text");
  let q3Text = document.querySelector("#q3Text");
   let q4Text = document.querySelector("#q4Text");
    let q5Text = document.querySelector("#q5Text");
let scoreText = document.querySelector("#scoreText");

let score = 0;

let Answers = ["3" , "2", "16", "24", " 4" ,"division"];
function gradeQuizz(){
   
    // alert("hi");
    //let q1UserAnswer = document.querySelector("").value;
    
    let q2UserAnswer = document.querySelector("input[name=q2]:checked").value;
    q1Text.textContent = "test";
    if(q2UserAnswer == Answers[2])
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

    let q3UserAnswer = document.querySelector("#q3").value;
    if(q3UserAnswer == Answers[3])
    {
        score += 20;
        q3Text.textContent = "Correct ";
        q3Text.style.color = "green";


    }
    else{
        q3Text.textContent = " Wrong ";
        q3Text.style.color = "red";
    }
    let q4UserAnswer = document.querySelector("input[name=q4]:checked").value;
    if(q4UserAnswer == Answers[4])
    {
        score += 20;
        q4Text.textContent = "Correct ";
        q4Text.style.color = "green";

    }

    let q5UserAnswer = document.querySelector("#q5questions").value;
    if(q5UserAnswer == Answers[5])
    {
        score += 20;
        q5Text.textContent = "Correct ";
        q5Text.style.color = "green";
    }
    else{
         q5Text.textContent = " Wrong ";
        q5Text.style.color = "red";
    }

    scoreText.textContent = " Score is " + score;
    alert("input " + q3UserAnswer);
}





// shuffleQ1Choices();
// function shuffleQ1Choices(){
//     let q1Choices = ["font-color",  "text-color",  "color", "color-text"];
//     for (let i = 0; i < q1Choices.length; i++) {
       
//         let radioElement = document.createElement("input");
//         radioElement.type = "radio";
//         radioElement.name = "q1";
//         radioElement.value = q1Choices[i];
//         console.log(radioElement);

//         let labelElement = document.createElement("label");
//         labelElement.textContent = q1Choices[i];


//         // labelElement.append(radioElement);
//         labelElement.prepend(radioElement);
//         labelElement.prepend(" ");
//         document.querySelector("#q1ChoicesDiv").append(labelElement);
//         console.log(labelElement);
//     }
    
// }