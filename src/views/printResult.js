export default whatIsResult

function whatIsResult(CountBall,CountStrike){
    let text;
    let isAnswer=false;
    if(CountBall==0&&CountStrike==0){
        text="낫싱";
    }else if(CountStrike==3){
        text="정답을 맞추셨습니다!"
        isAnswer=true;
    }else if(CountStrike==0){
        text=CountBall+"볼";
    }else if(CountBall==0){
        text=CountStrike+"스트라이크";
    }else{
        text=CountBall+"볼 "+CountStrike+"스트라이크";
    }
    printResult(text,isAnswer);
    return text;
    
}
function printResult(text,isAnswer){
    const element=document.getElementById("result");
    element.innerText=text;
    if(isAnswer){
        document.getElementById('game-restart-button').style.display='block';
        document.getElementById("user-input").disabled= true;
        document.getElementById("submit").disabled=true;
    }else{
        document.getElementById('game-restart-button').style.display='none';
    }
}