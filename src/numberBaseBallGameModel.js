// Model 파일

export default class NumberBaseballGameModel {
    constructor() {
        this.createComputerNumberString = this.randomString();
        //console.log(this.createComputerNumberString);
    }

    findVaildNumber(vaildString, randomNumber) {
        if (vaildString.includes(randomNumber)) return vaildString;
        return vaildString.concat(randomNumber);
    }

    randomString() {
        let vaildString = "";
        while (vaildString.length < 3) {
            let randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
            vaildString = this.findVaildNumber(vaildString, randomNumber);
        }
        return vaildString;
    }

    
    vaildTypedNumber() {
        const input = document.getElementById("user-input").value.split("");
        let vaildInput = "";
        for(let i = 0; i < input.length; i+=1) {
            if(isNaN(Number(input[i]))) {
                return false
            };
            vaildInput = this.findVaildNumber(vaildInput, input[i]);
        }
        if(vaildInput.length !== 3) {
            return false;
        } 
        return vaildInput.split("");
    }

    countStrike(computerNumber, inputNumber) {
        let count = 0;
    
        for(let i = 0; i < 3; i+=1) {
            if (computerNumber[i] === inputNumber[i]) count++;
        }
    
        return count;
    }

    countBall(computerNumber, inputNumber) {
        let count = 0;
    
        for(let i = 0; i < 3; i+=1) {
            let newInputNumber = inputNumber.filter((_, index) => index != i);
            if(newInputNumber.includes(computerNumber[i])) count++;
        }
    
        return count;
    }

    play(inputNumber) {
        const strike = this.countStrike(this.createComputerNumberString, inputNumber);
        const ball = this.countBall(this.createComputerNumberString, inputNumber);
    
        if (strike === 3) return true;
        else if((strike + ball) === 0) return "낫싱";
        else if (strike === 0) return `${ball}볼`;
        else if (ball === 0) return `${strike}스트라이크 `;
        else return `${ball}볼 ${strike}스트라이크`;
    }
}