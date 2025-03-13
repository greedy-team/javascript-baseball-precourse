let computerNumbers;
let userInput;

function appStart(){

    computerNumbers = createNewNumbers();
    //앱 시작되면 컴퓨터 랜덤정수 생성
    
    const form = document.querySelector("form");
    form.addEventListener("submit", play);
    
}


function createNewNumbers(){

    let numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    numbers = numbers.join("");

    console.log(numbers);
    return numbers; //문자열
}

let strikeCount;
let ballCount;

function play(event){
    event.preventDefault(); //새로고침 되는거 막아줌
    userInput = document.getElementById("user-input").value;
    // console.log(userInput);
    if(checkUserInput(userInput)){
        return;
    }

    compareInputWithAnswer();

    const r = result(strikeCount, ballCount);
    if(r==="3스트라이크"){
        displayGameover();
    }
    else {
        // console.log(r);
        displayResult(r);
    }
}

function compareInputWithAnswer(){
    strikeCount=0;
    ballCount=0;

    for(let i=0;i<3;i++){
        if(userInput[i] === computerNumbers[i]){  //스트라이크
            strikeCount++;
        }
        else if(computerNumbers.includes(userInput[i])){   //볼
            ballCount++;
        }
    }
}

function checkUserInput(userInput){
    let flag = isNaN(userInput); //isNaN = 숫자입력되면 false
    if(flag === true || userInput.length!=3){
        alert("잘못된 값을 입력했습니다.");
        return true;
    }
}

function result (strikeCount, ballCount){
    let result = "";

    if(ballCount>0){
        result += ballCount+"볼 ";
    }
    if(strikeCount>0){
        result += strikeCount+"스트라이크";
    }
    if(ballCount === 0 && strikeCount === 0){
        result = "낫싱";
    }

    return result;
}


function displayGameover(){
    document.querySelector("#result").style.display = "none";
    document.querySelector(".success").style.display = "block";

    const submitBtn = document.querySelector("#submit");
    submitBtn.disabled = true; 
   // 종료시 확인 버튼 멈추기

    const restart = document.querySelector("#game-restart-button");
    restart.addEventListener("click", replay);
}

function displayResult(r) {
    let gameResult = document.querySelector("#result");
    gameResult.style.display = "block";
    gameResult.textContent = r;
}

function replay(){

    const submitBtn = document.querySelector("#submit");
    submitBtn.disabled = false;
    
    document.querySelector(".success").style.display = "none";
    
    appStart();
}

appStart();
