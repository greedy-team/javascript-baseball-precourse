import {isDuplicate, isValidity} from './utils/validation.js';

export default class BaseballGame {
    constructor() {
        this.randomNumber = this.getRandomNumber();
    }

    getRandomNumber() {
        const tempArr = [];

        while (tempArr.length < 3) {
            const tempNumber = MissionUtils.Random.pickNumberInRange(1, 9);
            tempArr.push(tempNumber);

            if(isDuplicate(tempArr)) {
                tempArr.pop();
            }
        }

        console.log("RandomNumber: "+ tempArr)
        return tempArr;
    }

    checkValidity(inputNumber) {
        isValidity(inputNumber);
    }

    play(randomNumber, inputNumber) {
        let ball = 0, strike = 0;
        
        for (let i = 0; i < randomNumber.length; i++) {
            if (randomNumber[i] == inputNumber[i]) {
                strike++;
            } else if (randomNumber.some((number) => number == inputNumber[i])) {
                ball++;
            }
        }

        return {ball, strike};
    }
}