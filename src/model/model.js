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
}
