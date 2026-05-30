async function getJoke(){

    try{

        document.getElementById("joke").innerHTML =
        "Loading joke...";

        let response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
        );

        let data = await response.json();

        document.getElementById("joke").innerHTML =
        `<strong>${data.setup}</strong><br><br>${data.punchline}`;

    }

    catch(error){

        document.getElementById("joke").innerHTML =
        "Failed to load joke. Please try again.";

    }
}