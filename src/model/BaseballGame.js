import NumberUtils from "../utils/NumberUtils.js";

export default class BaseballGame {

    constructor() {
        this.computerNumbers = [];
        this.NumberUtils = new NumberUtils();
    }

    play(userNumbers) {
        const strikeAndBallCounts = this.compareNumbers(userNumbers);
        return this.extractResult(strikeAndBallCounts);
    }

    extractResult({ ball, strike }) {
        if (ball === 0 && strike === 0)
            return "낫싱";
        if (ball !== 0 && strike === 0)
            return `${ball}볼`;
        if (ball === 0 && strike !== 0)
            return `${strike}스트라이크`;
        return `${ball}볼 ${strike}스트라이크`;
    }

    compareNumbers(userNumbers) {
        let strikeAndBallCounts = {
            strike : 0,
            ball : 0
        };

        for(let i = 0; i < 3; i++) {
            if (userNumbers[i] === this.computerNumbers[i]) 
              strikeAndBallCounts.strike += 1;
            else if (this.computerNumbers.includes(userNumbers[i]))
              strikeAndBallCounts.ball += 1;
          }
    
          return strikeAndBallCounts;
    }

    makeComputerNumbers() {
        while (!this.NumberUtils.validateDifferentNumber(this.computerNumbers)) {
          this.computerNumbers = [
            this.makeRandomNumber(),
            this.makeRandomNumber(),
            this.makeRandomNumber()
          ];
        }

        console.log(this.computerNumbers);
    }

    makeRandomNumber() {
        return MissionUtils.Random.pickNumberInRange(1, 9);
    }
}