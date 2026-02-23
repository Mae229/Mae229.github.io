
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}


function checkImg() {
    return '<img src="img/check.png" width="20" height="20">';
}
function crossImg() {
    return '<img src="img/cross.jpg" width="20" height="20">';
}

function showFeedback(el, isCorrect, hint) {
    if (isCorrect) {
        el.innerHTML = checkImg() + " Correct!";
        el.className = "feedback correct";
    } else {
        el.innerHTML = crossImg() + " Wrong. " + hint;
        el.className = "feedback wrong";
    }
}

let timesTaken = parseInt(localStorage.getItem("quizTimesTaken") || "0");
document.getElementById("timesText").textContent = "Times taken: " + timesTaken;


let Answers = ["3", "2", "16", "24", "8", "remainder"];

let score = 0;

document.querySelector("#submit").addEventListener("click", gradeQuizz);

function gradeQuizz() {
    score = 0;

    let q1Text = document.querySelector("#q1Text");
    let q2Text = document.querySelector("#q2Text");
    let q3Text = document.querySelector("#q3Text");
    let q4Text = document.querySelector("#q4Text");
    let q5Text = document.querySelector("#q5Text");
    let scoreText = document.querySelector("#scoreText");

    let q1Checked = [...document.querySelectorAll("input[name='q1']:checked")].map(i => i.value);
    let q1Correct = q1Checked.includes("3") && q1Checked.includes("2")
                    && !q1Checked.includes("2026") && !q1Checked.includes("9");
    if (q1Correct) 
        score += 20;
    showFeedback(q1Text, q1Correct, "The prime numbers here are 2 and 3.");

    let q2Input = document.querySelector("input[name='q2']:checked");
    let q2UserAnswer = q2Input ? q2Input.value : "";
    let q2Correct = q2UserAnswer === Answers[2];
    if (q2Correct) 
        score += 20;
    showFeedback(q2Text, q2Correct, "16 is a natural number.");

    let q3UserAnswer = document.querySelector("#q3").value.trim();
    let q3Correct = q3UserAnswer === Answers[3];
    if (q3Correct) 
        score += 20;
    showFeedback(q3Text, q3Correct, "4! = 4x3x2x1 = 24");

    let q4Input = document.querySelector("input[name='q4']:checked");
    let q4UserAnswer = q4Input ? q4Input.value : "";
    let q4Correct = q4UserAnswer === Answers[4];
    if (q4Correct) 
        score += 20;
    showFeedback(q4Text, q4Correct, "Area = base x height = 2 x 4 = 8");

    let q5UserAnswer = document.querySelector("#q5questions").value;
    let q5Correct = q5UserAnswer === Answers[5];
    if (q5Correct) 
        score += 20;
    showFeedback(q5Text, q5Correct, "mod returns the remainder of a division.");

    scoreText.textContent = "Score: " + score + " / 100";


    let congratsTxt = document.getElementById("congratsTxt");
    if(score > 80)
        congratsTxt.textContent = "🎉 Congratulations! You scored above 80 — great job!";

    timesTaken += 1;
    localStorage.setItem("quizTimesTaken", timesTaken);
    document.getElementById("timesText").textContent = "Times taken: " + timesTaken;
}
