//실행
import BaseballGame from "./BaseballGame.js";

export function appStart(){
    
    const game = new BaseballGame(); //인스턴스 생성

    const form = document.querySelector("form");
    form.addEventListener("submit", (event) =>{
        event.preventDefault(); //새로고침 되는거 막아줌
        let userInput = document.getElementById("user-input").value;
        game.play(userInput);
    });
}

appStart();

