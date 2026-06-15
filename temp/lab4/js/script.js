//event listeners
document.querySelector("#zip").addEventListener("change", displayCity);
document.querySelector("#state").addEventListener("change", displayCounties);
document.querySelector("#username").addEventListener("change", checkUsername);
document.querySelector("#passwordInput").addEventListener("focus", showSuggestedPassword);
document.querySelector("#signupForm").addEventListener("submit", function(event) {
    validateForm(event);
});

//functions

async function displayCity() {
    let zipCode = document.querySelector("#zip").value;
    let url = `https://csumb.space/api/cityInfoAPI.php?zip=${zipCode}`;
    let response = await fetch(url);
    let data = await response.json();
    //console.log(data);

    if (data.city == false || data.city == "" || data.city == undefined) {
        document.querySelector("#city").innerHTML = "Zip code not found";
        document.querySelector("#latitude").innerHTML = "";
        document.querySelector("#longitude").innerHTML = "";
    } else {
        document.querySelector("#city").innerHTML = data.city;
        document.querySelector("#latitude").innerHTML = data.latitude;
        document.querySelector("#longitude").innerHTML = data.longitude;
    }
}

async function displayCounties() {
    let state = document.querySelector("#state").value;
    let url = `https://csumb.space/api/countyListAPI.php?state=${state}`;
    let response = await fetch(url);
    let data = await response.json();
    let countyList = document.querySelector("#county");
    countyList.innerHTML = "<option>Select County</option>";
    for (let i = 0; i < data.length; i++) {
        countyList.innerHTML += `<option>${data[i].county}</option>`;
    }
}

async function loadStates() {
    let url = "https://csumb.space/api/allStatesAPI.php";
    let response = await fetch(url);
    let data = await response.json();
    let stateList = document.querySelector("#state");
    for (let i = 0; i < data.length; i++) {
        stateList.innerHTML += `<option value="${data[i].usps}">${data[i].state} (${data[i].usps})</option>`;
    }
}
loadStates();

async function checkUsername() {
    let username = document.querySelector("#username").value;
    let url = `https://csumb.space/api/usernamesAPI.php?username=${username}`;
    let response = await fetch(url);
    let data = await response.json();
    let usernameError = document.querySelector("#usernameError");
    if (data.available) {
        usernameError.innerHTML = " Username available!";
        usernameError.style.color = "green";
    } else {
        usernameError.innerHTML = " Username taken";
        usernameError.style.color = "red";
    }
}

async function showSuggestedPassword() {
    let url = "https://csumb.space/api/suggestedPassword.php?length=8";
    let response = await fetch(url);
    let data = await response.json();
    document.querySelector("#suggestedPassword").innerHTML = " Suggested: " + data.password;
}

// let passwordInput = document.querySelector("#passwordInput");
// passwordInput.addEventListener("input",async function(){
//     let url = "https://csumb.space/api/suggestedPassword.php?length=8";
//     try {
//         const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error("Error accessing API endpoint")
//             }
//         const data = await response.json();
//         console.log(data);
//         let suggestedPassword = document.querySelector("#suggestedPassword");
//         suggestedPassword.textContent = "Suggested Password : " + data.password;
//         let passwordLengthText = document.querySelector("#passwordLengthText");
//         if(passwordInput.value.length < 6){
//             passwordLengthText.textContent = " Password too short" ;
//         }
//         else if(passwordInput.value.length >= 6){
//             passwordLengthText.textContent = " " ;
//         }
//     } catch (err) {
//             if (err instanceof TypeError) {
//                 alert("Error accessing API endpoint (network failure)");
//             } else {
//                 alert(err.message);
//             }
//     } //catch
// });

//Validating form data
function validateForm(e) {
    let isValid = true;

    let username = document.querySelector("#username").value;
    if (username.length < 3) {
        document.querySelector("#usernameError").innerHTML = "Username must be at least 3 characters!";
        document.querySelector("#usernameError").style.color = "red";
        isValid = false;
    }

    let password = document.querySelector("#passwordInput").value;
    if (password.length < 6) {
        document.querySelector("#passwordLengthText").innerHTML = "Password must be at least 6 characters!";
        document.querySelector("#passwordLengthText").style.color = "red";
        isValid = false;
    }

    let password2 = document.querySelector("#password2").value;
    if (password !== password2) {
        document.querySelector("#passwordError").innerHTML = "Passwords do not match!";
        document.querySelector("#passwordError").style.color = "red";
        isValid = false;
    }

    if (!isValid) {
        e.preventDefault();
    }
}
