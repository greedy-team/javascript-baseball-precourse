export class BaseballGameModel {
  constructor() {
    this.result = "";
    this.computerInput = this.getComputerInput();
  }

  // computerInput(정답)을 얻는 메서드
  getComputerInput() {
    let randomNumber = [0, 0, 0];
    randomNumber[0] = MissionUtils.Random.pickNumberInRange(1, 9);
    for (let i = 1; i < 3; i++) {
      let pickedNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(pickedNumber)) randomNumber[i] = pickedNumber;
      else i -= 1;
    }
    console.log(randomNumber[0] * 100 + randomNumber[1] * 10 + randomNumber[2]);
    return randomNumber[0] * 100 + randomNumber[1] * 10 + randomNumber[2];
  }

  // 스트라이크, 볼을 세는 메서드
  countStrikeAndBall(computerString, userString) {
    let strikeCnt = 0;
    let ballCnt = 0;

    for (let i = 0; i < 3; i++) {
      if (computerString[i] === userString[i]) {
        strikeCnt += 1;
        continue;
      }
      if (computerString.includes(userString[i])) ballCnt += 1;
    }
    return [strikeCnt, ballCnt];
  }
}
