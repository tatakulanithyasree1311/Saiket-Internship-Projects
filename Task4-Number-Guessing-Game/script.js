let randomNumber =
Math.floor(Math.random()*100)+1;

let count = 0;

function checkGuess(){

let guess =
document.getElementById("guess").value;

if(guess==""){
alert("Enter a number");
return;
}

count++;

if(guess == randomNumber){

document.getElementById("message").innerHTML =
"🎉 Correct!";

}

else if(guess > randomNumber){

document.getElementById("message").innerHTML =
"📈 Too High";

}

else{

document.getElementById("message").innerHTML =
"📉 Too Low";

}

document.getElementById("attempts").innerHTML =
"Attempts: " + count;

}

function restartGame(){

randomNumber =
Math.floor(Math.random()*100)+1;

count = 0;

document.getElementById("guess").value = "";

document.getElementById("message").innerHTML = "";

document.getElementById("attempts").innerHTML = "";

}