//UI 업데이트
import {appStart} from"./index.js"

export function displayGameover(){
    document.querySelector("#result").style.display = "none";
    document.querySelector(".success").style.display = "block";

    const submitBtn = document.querySelector("#submit");
    submitBtn.disabled = true; 

    const restart = document.querySelector("#game-restart-button");
    restart.addEventListener("click", (event)=>{
        event.preventDefault();
        replay();
    });
}

export function displayResult(result) {
    let gameResult = document.querySelector("#result");
    gameResult.style.display = "block";
    gameResult.textContent = result;
}

function replay(){

    const submitBtn = document.querySelector("#submit");
    submitBtn.disabled = false;
    
    document.querySelector(".success").style.display = "none";
    
    appStart();
}