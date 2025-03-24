// Model 파일

export default class NumberBaseballGameModel {
    constructor() {
        this.createComputerNumberString = this.randomString();
    }

    findVaildNumber(vaildString, randomNumber) {
        if (vaildString.includes(randomNumber)) return vaildString;
        return vaildString.concat(randomNumber);
    }

    randomString() {
        let vaildString = '';
        
        while (vaildString.length < 3) {
            let randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
            vaildString = this.findVaildNumber(vaildString, randomNumber);
        }
        console.log(vaildString);
        return vaildString;
    }

    
    vaildTypedNumber(userInputNumber) {
        let vaildInput = '';

        userInputNumber.forEach((userInput) => {
            if (isNaN(Number(userInput))) {
                return false;
            };
            vaildInput = this.findVaildNumber(vaildInput, userInput);
        });

        if (vaildInput.length !== 3) {
            return false;
        } 

        return vaildInput.split("");
    }

    countStrike(computerNumber, inputNumber) {
        let count = 0;

        inputNumber.forEach((inpNum, index) => {
            if (inpNum === computerNumber[index]) count += 1;
        });
    
        return count;
    }

    countBall(computerNumber, inputNumber) {
        let count = 0;
    
        inputNumber.forEach((_, index) => {
            let newInputNumber = inputNumber.filter((_, idx) => idx !== index);
            if (newInputNumber.includes(computerNumber[index])) count += 1;
        });
    
        return count;
    }

    play(inputNumber) {
        const strike = this.countStrike(this.createComputerNumberString, inputNumber);
        const ball = this.countBall(this.createComputerNumberString, inputNumber);
    
        if (strike === 3) return true;
        else if ((strike + ball) === 0) return '낫싱';
        else if (strike === 0) return `${ball}볼`;
        else if (ball === 0) return `${strike}스트라이크 `;
        return `${ball}볼 ${strike}스트라이크`;
    }
}
