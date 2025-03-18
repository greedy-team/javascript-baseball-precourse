//게임진행
import {displayGameover, displayResult} from "./GameView.js"

export default class BaseballGame{
    constructor(){
        this.computerNumbers = this.createNewNumbers();
    }

    createNewNumbers(){
        let numbers = [];
            while (numbers.length < 3) {
                let num = MissionUtils.Random.pickNumberInRange(1,9);
                if (!numbers.includes(num)) {
                    numbers.push(num);
                }
            }
            
            numbers = numbers.join("");
            console.log(numbers);

        return numbers;
    }
    

    gamePlay(userInput){
        // console.log(userInput);
        if(this.checkUserInput(userInput)){
            return ;
        }
    
        const result = this.compareInputWithAnswer(userInput);
        
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
            return result += ballCount+"볼 ";
        }
        if(strikeCount>0){
            return result += strikeCount+"스트라이크";
        }
        return result = "낫싱";
    }

    checkUserInput(userInput){
        const flag = isNaN(userInput);
        if(flag){
            alert("잘못된 값을 입력했습니다.\n숫자를 입력해주세요.");
            return true;
        }
        if(userInput.length!==3){
            alert("잘못된 값을 입력했습니다.\n세자리 숫자를 입력해주세요");
            return true;
        }
        if(new Set(userInput).size !== 3){
            alert("잘못된 값을 입력했습니다.\n중복되지않는 세자리 숫자를 입력해주세요.");
            return true;
        }
        return false;
    }
}