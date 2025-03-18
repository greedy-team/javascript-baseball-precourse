//UI 업데이트
import {gameStart} from"./index.js"

export function displaySuccessMessage(){
    document.querySelector("#result").style.display = "none";
    document.querySelector(".success").style.display = "block";

    const submitBtn = document.querySelector("#submit");
    submitBtn.disabled = true; 

    const replay = document.querySelector("#game-restart-button");
    replay.addEventListener("click", (event)=>{
        event.preventDefault();
        gameReplay();
    });
}

export function displayResultMessage(comparisionResult) {
    let gameResult = document.querySelector("#result");
    gameResult.style.display = "block";
    gameResult.textContent = comparisionResult;
}

function gameReplay(){

    const submitBtn = document.querySelector("#submit");
    submitBtn.disabled = false;
    
    document.querySelector(".success").style.display = "none";
    
    gameStart();
}