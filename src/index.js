//실행
import { createNewNumbers, play } from "./BaseballGame.js";

function appStart(){

    let computerNumbers = createNewNumbers();
    //앱 시작되면 컴퓨터 랜덤정수 생성
    
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) =>{
        event.preventDefault(); //새로고침 되는거 막아줌
        play(computerNumbers);
    });
}

export function replay(){

    const submitBtn = document.querySelector("#submit");
    submitBtn.disabled = false;
    
    document.querySelector(".success").style.display = "none";
    
    appStart();
}


appStart();

