export default class Model {
  constructor() {
    this.computerNumbers = [];
    this.userNumbers = [];
    this.strikeCount = 0;
    this.ballCount = 0;
  }

  getUserNumber(userNumbers) {
    this.userNumbers = [...userNumbers];
    this.userNumbers = this.userNumbers.map(Number);
    return this.userNumbers;
  }

  getComputerNumber() {
    this.createComputerNumbers();
    return this.computerNumbers;
  }

  createComputerNumbers() {
    while (this.computerNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumbers.includes(number)) {
        this.computerNumbers.push(number);
      }
    }
  }

  countStrikeAndBall(computerInput, userInput) {
    userInput.forEach((userNumber, userIdx) => {
      if (computerInput.includes(userNumber)) {
        const computerIdx = computerInput.indexOf(userNumber);
        if (computerIdx === userIdx) {
          this.strikeCount += 1;
        } else {
          this.ballCount += 1;
        }
      }
    });
  }

  createResultMessage() {
    const ballMessage = `${this.ballCount}볼 `;
    const strikeMessage = `${this.strikeCount}스트라이크`;
    if (this.ballCount !== 0 && this.strikeCount !== 0) {
      return ballMessage.concat(strikeMessage);
    } else if (this.ballCount !== 0 && this.strikeCount === 0) {
      return ballMessage;
    } else if (this.strikeCount !== 0 && this.ballCount === 0) {
      return strikeMessage;
    }
    return '낫싱';
  }

  resetCount() {
    this.ballCount = 0;
    this.strikeCount = 0;
  }
}
