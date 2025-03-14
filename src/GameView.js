//UI 업데이트
import {replay} from"./index.js"

export function displayGameover(){
    document.querySelector("#result").style.display = "none";
    document.querySelector(".success").style.display = "block";

    const submitBtn = document.querySelector("#submit");
    submitBtn.disabled = true; 
   // 종료시 확인 버튼 멈추기

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


