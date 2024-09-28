  export default class BaseballGame {

    constructor() {
      this.computerNumbers = [];
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

      while(!this.validateComputerDifferentNumber(computerNumbers)) {
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

    validateComputerDifferentNumber(computerNumbers) {
      return new Set(computerNumbers).size === 3;
    }

    validateDifferentNumber(userNumbers) {
      if (new Set(userNumbers).size !== 3) {
        alert("잘못된 입력입니다. 중복되지 않는 서로 다른 3개의 숫자를 입력하세요.");
        return false;
      }
      return true;
    }

    validateLength(userNumbers) {
      if (userNumbers.length !== 3) {
        alert('잘못된 입력입니다. 3자리 숫자를 입력하세요.');
        return false;
      }
      return true;
    }

    validateNumbers(userNumbers) {
      if (!/^\d{3}$/.test(userNumbers)) {
        alert('잘못된 입력입니다. 숫자만 입력하세요.');
        return false;
      }
      return true;
    }

    printResult(result) {
      const output = document.querySelector("#result");
      output.innerHTML = result;
    }

    endGame(result) {
      alert(result + " 축하드립니다!");
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
      output.innerHTML = '';

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

        if (!this.validateLength(userNumbers) ||
            !this.validateNumbers(userInput) ||
            !this.validateDifferentNumber(userNumbers)) {
          return;
        }

        let result = this.play(userNumbers, this.computerNumbers);
        this.printResult(result);

        if(this.isPlayerWinner(result)){
          this.endGame(result);
        }
      });
    }
  }

new BaseballGame();