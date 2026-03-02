async function pageLoad() {
   
}

pageLoad();

let zipCodeInput = document.querySelector("#zipCodeInput");
zipCodeInput.addEventListener("input", async function() {
    let url = `https://csumb.space/api/cityInfoAPI.php?zip=${zipCodeInput.value}`;
    try {
        const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error accessing API endpoint")
            }
        const data = await response.json();
        console.log(data);
        
        //
        let cityDisplay = document.querySelector("#cityDisplay");
        cityDisplay.textContent = data.city;
        let latitudeDisplay = document.querySelector("#latitudeDisplay");
        latitudeDisplay.textContent = data.latitude;
        let longitudeDisplay = document.querySelector("#longitudeDisplay");
        longitudeDisplay.textContent = data.longitude;

    } catch (err) {
            if (err instanceof TypeError) {
                alert("Error accessing API endpoint (network failure)");
            } else {
                alert(err.message);
            }
    } //catch

});

let usernameInput = document.querySelector("#usernameInput");

usernameInput.addEventListener("input", async function () {
    let url = `https://csumb.space/api/usernamesAPI.php?username=${usernameInput.value}`;
    try {
        const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error accessing API endpoint")
            }
        const data = await response.json();
        console.log(data);
        let availability = document.querySelector("#availability");
        // let notAvailableNames = ["eeny", "meeny", "miny", "maria"];
        
        // if (notAvailableNames.includes(usernameInput.value)){
        //     availability.textContent = "This username is not available. "
        // }
        // availability.textContent = " ";
        if(!data.available)
        {
            availability.textContent = "This username is not available. "
        }


    } catch (err) {
            if (err instanceof TypeError) {
                alert("Error accessing API endpoint (network failure)");
            } else {
                alert(err.message);
            }
    } //catch
});

let passwordInput = document.querySelector("#passwordInput");
passwordInput.addEventListener("input",async function(){
    let url = "https://csumb.space/api/suggestedPassword.php?length=8";
    try {
        const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error accessing API endpoint")
            }
        const data = await response.json();
        console.log(data);
        let suggestedPassword = document.querySelector("#suggestedPassword");
        suggestedPassword.textContent = "Suggested Password : " + data.password;
        let passwordLengthText = document.querySelector("#passwordLengthText");
        if(passwordInput.value.length < 6){
            passwordLengthText.textContent = " Password too short" ;
        }
    } catch (err) {
            if (err instanceof TypeError) {
                alert("Error accessing API endpoint (network failure)");
            } else {
                alert(err.message);
            }
    } //catch
});

let stateInput = document.querySelector("#stateInput");
stateInput.addEventListener("click",async function() {
    let url = "https://csumb.space/api/allStatesAPI.php";
    try {
        const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error accessing API endpoint")
            }
        const data = await response.json();
        console.log(data);
        for(i = 0 ; i < 50 ; i++){
            let elmt = document.createElement("option");
            elmt.id = data[i].id;
            elmt.textContent = data[i].state + " " + data[i].usps;

        }
    } catch (err) {
            if (err instanceof TypeError) {
                alert("Error accessing API endpoint (network failure)");
            } else {
                alert(err.message);
            }
    } //catch
});