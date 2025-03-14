//게임진행
import {displayGameover, displayResult} from "./GameView.js"

export default class BaseballGame{
    constructor(){
        this.computerNumbers = this.createNewNumbers();
    }

    createNewNumbers(){

        let numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
        numbers = numbers.join("");
    
        console.log(numbers);
        return numbers; //문자열
    }

    gamePlay(userInput){
        // console.log(userInput);
        if(this.checkUserInput(userInput)){
            return ;    //숫자 아니면 끝내기
        }
    
        let result = this.compareInputWithAnswer(userInput);
        
        if(result==="3스트라이크"){
            displayGameover();
        }else {
            // console.log(result);
            displayResult(result);
        }
    }

    compareInputWithAnswer(userInput){
        let strikeCount=0, ballCount=0;
    
        for(let i=0;i<3;i++){
            if(userInput[i] === this.computerNumbers[i]){  //스트라이크
                strikeCount++;
            }else if(this.computerNumbers.includes(userInput[i])){   //볼
                ballCount++;
            }
        }
    
        const res = this.play(strikeCount, ballCount);
        return res;
    }

    play (strikeCount, ballCount){
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

    checkUserInput(userInput){
        let flag = isNaN(userInput); //isNaN = 숫자입력되면 false
        if(flag || userInput.length!=3){
            alert("잘못된 값을 입력했습니다.");
            return true;
        }
        return false;
    }

}