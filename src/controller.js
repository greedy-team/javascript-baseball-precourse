import { printresult, restarthide } from "./view.js";
import { ValidateNum, play , getRandomNum } from "./model.js";

let ComNum = getRandomNum(); //컨트롤러
restarthide();

document.querySelector('#submit').addEventListener('click', (event) => {
  event.preventDefault();
  let UserNum = document.querySelector("#user-input").value;
  if (ValidateNum(UserNum)) {
    console.log("컴퓨터 번호: ", ComNum);
    printresult(play(UserNum, ComNum));
  } else {
    alert("다시 입력해주세요");
  }
});

document.getElementById('game-restart-button').addEventListener('click', () => {  
  location.reload(); 
});