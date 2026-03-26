let authInfoBtn = document.querySelector("#authInfoBtn");

let quoteIdd;
let bio;
async function backgroundIMG() {
let url = "https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&per_page=50&orientation=horizontal&q=flowers";
  try {
       const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
       const data = await response.json();
       console.log(data);
       let i = Math.floor(Math.random() % data.hits.length) ;
        document.body.style.backgroundImage = data.hits[i].webformatURL;
       } catch (err) {
             if (err instanceof TypeError) {
                alert("Error accessing API endpoint (network failure)");
              } else {
                alert(err.message);
              }
      } //catch
}

backgroundIMG();

async function getAPIData() {
    let url = "https://csumb.space/api/famousQuotes/getRandomQuote.php";
    try {
        const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error accessing API endpoint")
            }
        const data1 = await response.json();
        // // console.log(data1);
        // let firstName = 
        // let lastName = ;
        let quoteText = document.querySelector("#quoteText");
        let autName = document.querySelector("#autName");
        autName.textContent = data1.firstName + " " + data1.lastName;
        quoteText.textContent = data1.quoteText;
        quoteIdd = data1.quoteId;
        console.log(quoteText);

        //Translation
        
        } catch (err) {
                if (err instanceof TypeError) {
                    alert("Error accessing API 1 endpoint (network failure)");
                } else {
                    alert(err.message);
                }
        } //catch
}
getAPIData();
authInfoBtn.addEventListener("click", async function getAuthInfo(){
        //
        let url = "https://csumb.space/api/famousQuotes/getRandomQuote.php";
        try {
            const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Error accessing API endpoint")
                }
            const data2 = await response.json();
            
            let authorInfo = document.querySelector("#authorInfo");

            authorInfo.textContent = data2.bio;
            let authImg  = document.createElement("img");
            authImg.src = data2.picture;
            document.getElementById("image").appendChild(authImg);
            //Translation
        
        } catch (err) {
                if (err instanceof TypeError) {
                    alert("Error accessing API 1 endpoint (network failure)");
                } else {
                    alert(err.message);
                }
        } //catch
                
    } );



let translateBtn = document.querySelector("#translateBtn");
translateBtn.addEventListener("click", async function getTranslation() {
    
    let langue = document.querySelector("input[name=language]:checked");
        let url = `https://csumb.space/api/famousQuotes/translateQuote.php?lang=${langue.value}&quoteId=${quoteIdd}`;
        console.log(url);
        try {
            const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Error accessing API endpoint")
                }
            const data3 = await response.json();
            console.log(data3);
            quoteText.textContent = data3.translation;
            } catch (err) {
                    if (err instanceof TypeError) {
                        alert("Error accessing API 2 endpoint (network failure)");
                    } else {
                        alert(err.message);
                    }
            } //catch
        })



    

