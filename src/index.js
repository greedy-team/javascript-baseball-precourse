//실행
import BaseballGame from "./BaseballGame.js";

export function appStart(){
    
    const game = new BaseballGame();

    const form = document.querySelector("form");
    form.addEventListener("submit", (event) =>{
        event.preventDefault();
        let userInput = document.getElementById("user-input").value;
        game.gamePlay(userInput);
    });
}

appStart();

