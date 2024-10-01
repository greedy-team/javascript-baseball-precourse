import NumberUtils from "../utils/NumberUtils.js";

export default class BaseballGame {

    constructor() {
        this.computerNumbers = [];
        this.NumberUtils = new NumberUtils();
    }

    play(computerNumbers, userNumbers) {
        const strikeAndBallCounts = this.compareNumbers(userNumbers, computerNumbers);
        return this.extractResult(strikeAndBallCounts);
    }

    extractResult({ ball, strike }) {
        if(ball === 0 && strike === 0)
            return "낫싱";
        if(ball !== 0 && strike === 0)
            return `${ball}볼`;
        if(ball === 0 && strike !== 0)
            return `${strike}스트라이크`;
        return `${ball}볼 ${strike}스트라이크`;
    }

    compareNumbers(userNumbers, computerNumbers) {
        let strikeAndBallCounts = {
            strike : 0,
            ball : 0
        };

        for(let i = 0; i < 3; i++) {
            if(userNumbers[i] === computerNumbers[i]) 
              strikeAndBallCounts.strike += 1;
            else if(computerNumbers.includes(userNumbers[i]))
              strikeAndBallCounts.ball += 1;
          }
    
          return strikeAndBallCounts;
    }

    makeComputerNumbers() {
        let computerNumbers = [];
  
        while(!this.NumberUtils.validateDifferentNumber(computerNumbers)) {
          computerNumbers = [
            this.makeRandomNumber(),
            this.makeRandomNumber(),
            this.makeRandomNumber()
          ];
        }
  
        return computerNumbers;
    }

    makeRandomNumber() {
        return MissionUtils.Random.pickNumberInRange(1, 9);
    }
}