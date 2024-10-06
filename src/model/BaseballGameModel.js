export default class BaseballGameModel {
  constructor() {
    this.computerNumbers = [];
    this.userNumbers = [];
  }

  getUserNumber(userNumbers) {
    this.userNumbers = [...userNumbers];
    this.userNumbers = this.userNumbers.map(Number);
    return this.userNumbers;
  }

  initComputerNumbers() {
    this.computerNumbers = [];
  }

  createComputerNumbers() {
    while (this.computerNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumbers.includes(number)) {
        this.computerNumbers.push(number);
      }
    }
    return this.computerNumbers;
  }

  countStrikeAndBall(computerInput, userInput) {
    let strikeCount = 0;
    let ballCount = 0;
    userInput.forEach((userNumber, userIdx) => {
      if (computerInput.includes(userNumber)) {
        const computerIdx = computerInput.indexOf(userNumber);
        if (computerIdx === userIdx) {
          strikeCount += 1;
        } else {
          ballCount += 1;
        }
      }
    });
    return [strikeCount, ballCount];
  }

  createResultMessage(userInput) {
    const computerInput = this.createComputerNumbers();
    const [strikeCount, ballCount] = this.countStrikeAndBall(
      computerInput,
      userInput
    );
    console.log(computerInput, userInput);
    if (ballCount !== 0 && strikeCount !== 0) {
      return `${ballCount}볼 ${strikeCount}스트라이크`;
    } else if (ballCount !== 0 && strikeCount === 0) {
      return `${ballCount}볼 `;
    } else if (strikeCount !== 0 && ballCount === 0) {
      return `${strikeCount}스트라이크`;
    }
    return '낫싱';
  }
}
