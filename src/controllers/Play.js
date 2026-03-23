import getUserNum from '../models/UserNum.js'
import whatIsResult from '../views/printResult.js'
import pickRandomThreeNum from '../models/PickThreeNum.js';
export default play

let ComNum = pickRandomThreeNum();

function Restart(){
    ComNum=pickRandomThreeNum();
    document.getElementById('game-restart-button').style.display='none';
    document.getElementById("result").innerText=' ';
    document.getElementById("user-input").disabled= false;
    document.getElementById("submit").disabled=false;
    document.getElementById("user-input").value="";
}

function play() {
    const UserNum = getUserNum();
    if (!UserNum) return;
    let CountBall = 0;
    let CountStrike=0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            CountBall=CountBall+isBall(ComNum,UserNum,i,j);
            CountStrike=CountStrike+isStrike(ComNum,UserNum,i,j);
        }
    }
    return whatIsResult(CountBall,CountStrike);
}
function isBall(ComNum, UserNum, i, j) {
    let CountBall=0;
    if (ComNum[i] == UserNum[j] && i != j) {
        CountBall++;
    }
    return CountBall;
}
function isStrike(ComNum, UserNum, i, j){
    let CountStrike=0;
    if (ComNum[i] == UserNum[j] && i == j) {
        CountStrike++;
    }
    return CountStrike;
}
function ifEnterPlay(){
    if(event.keyCode===13){
        play();
    }

}
document.getElementById("user-input").onkeyup=ifEnterPlay;
document.getElementById("submit").onclick = play;
document.getElementById("game-restart-button").onclick=Restart