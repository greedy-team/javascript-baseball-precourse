export default class BaseballGameModel {
  constructor() {
    this.computerNumbers = [];
    this.userNumbers = [];
    this.strike = 0;
    this.ball = 0;
  }

  generateRandomNumbers() {
    const numbers = new Set();
    while (numbers.size < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      numbers.add(num);
    }
    this.computerNumbers = [...numbers];
  };

  checkUserInputFormat(userInput) {
    if (/^$/.test(userInput)) { 
      return "빈 입력입니다.";
    }
    if (/\s/.test(userInput)) { 
      return "입력에 공백이 포함되어 있습니다.";
    }
    if (userInput.length > 3) {
      return "입력이 3자리를 초과합니다.";
    }
    if (userInput.length < 3) {
      return "입력이 3자리 미만입니다.";
    }
    if (!/^[1-9]{3}$/.test(userInput)) { 
      return "입력에 1~9 이외의 문자가 포함되어 있습니다.";
    }
    if (new Set(userInput).size !== 3) {
      return "중복된 숫자가 존재합니다.";
    }
    return "유효한 입력";
  };

  setUserNumbers(userInput) {
    this.userNumbers = userInput.split("").map(Number);
  }

  countStrikeAndBall() {
    this.strike = 0;
    this.ball = 0;
    this.userNumbers.forEach((userNum, index) => {
      if (userNum === this.computerNumbers[index]) {
        this.strike += 1;
      } else if (this.computerNumbers.includes(userNum)) {
        this.ball += 1;
      }
    });
  }

  getResult() {
    if (this.strike === 3) return "정답";
    if (this.strike === 0 && this.ball === 0) return "낫싱";
    if (this.ball === 0) return `${this.strike}스트라이크`;
    if (this.strike === 0) return `${this.ball}볼`;
    return `${this.ball}볼 ${this.strike}스트라이크`;
  }

  play() {
    this.countStrikeAndBall();
    return this.getResult();
  }
}