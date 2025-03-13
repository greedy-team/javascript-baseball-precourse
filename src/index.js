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

function play(event){
    event.preventDefault(); //새로고침 되는거 막아줌
    userInput = document.getElementById("user-input").value;
    // console.log(userInput);

    let strikeCount = 0;
    let ballCount = 0;

    for(let i=0;i<3;i++){
        if(userInput[i] === computerNumbers[i]){  //스트라이크
            strikeCount++;
        }
        else if(computerNumbers.includes(userInput[i])){   //볼
            ballCount++;
        }
    }

    const r = result(strikeCount, ballCount);
    if(r==="3스트라이크"){
        // gameover();
    }
    else{
        console.log(r);
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




appStart();

