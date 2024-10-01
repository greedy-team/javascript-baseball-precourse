  import NumberUtils from "./utils/NumberUtils.js";

  export default class BaseballGame {

    constructor() {
      this.computerNumbers = [];
      this.NumberUtils = new NumberUtils();
      this.gameStart();
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

    printResult(result) {
      const output = document.querySelector("#result");
      output.textContent = result;
    }

    endGame(result) {
      setTimeout(function() {
        alert(result + " 축하드립니다!");
      }, 1);

      const restartButton = document.querySelector("#game-restart-button");

      this.toggleButtons(false);

      restartButton.addEventListener('click', () => this.restart());
    }

    toggleButtons(visible) {
      document.querySelector("#submit").style.display = visible ? 'block' : 'none';
      document.querySelector("#game-restart-button").style.display = visible ? 'none' : 'block';
    }

    restart() {
      this.computerNumbers = this.makeComputerNumbers();
      
      const output = document.querySelector("#result");
      output.textContent = '';

      this.toggleButtons(true);
    }

    isPlayerWinner(result) {
      return result === "3스트라이크";
    }

    gameStart() {
      const input = document.querySelector("#user-input");
      const submitButton = document.querySelector("#submit");

      this.computerNumbers = this.makeComputerNumbers();

      submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        
        console.log(this.computerNumbers);

        const userInput = input.value;
        const userNumbers = userInput.split('').map(Number);

        if (!this.NumberUtils.validateLength(userNumbers) ||
            !this.NumberUtils.validateNumbers(userInput) ||
            !this.NumberUtils.validateDifferentNumber(userNumbers)) {
          return;
        }

        const result = this.play(userNumbers, this.computerNumbers);
        this.printResult(result);

        if(this.isPlayerWinner(result)){
          this.endGame(result);
        }
      });
    }
  }

new BaseballGame();