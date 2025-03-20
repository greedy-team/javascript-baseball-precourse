export default class BaseballGameModel {
  constructor() {
    this.computerNumbers = [];
    this.userNumbers = [];
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
      return "오류 빈 입력입니다.";
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

  countStrikes() {
    let strikeCount = 0;
  
    for (let i = 0; i < this.userNumbers.length; i++) {
      if (this.userNumbers[i] === this.computerNumbers[i]) {
        strikeCount++; 
      }
    }
  
    return strikeCount;
  }
  
  countBalls() {
    let ballCount = 0;
  
    for (let i = 0; i < this.userNumbers.length; i++) {
      if (this.userNumbers[i] !== this.computerNumbers[i] && this.computerNumbers.includes(this.userNumbers[i])) {
        ballCount++;
      }
    }
  
    return ballCount;
  }

  getResult(strikes, balls) {
    if (strikes === 3) return "정답";
    if (strikes === 0 && balls === 0) return "낫싱";
    if (balls === 0) return `${strikes}스트라이크`;
    if (strikes === 0) return `${balls}볼`;
    return `${balls}볼 ${strikes}스트라이크`;
  }

  play() {
    return this.getResult(
      this.countStrikes(),
      this.countBalls()
    );
  }
}