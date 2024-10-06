export class BaseballGameModel {
  constructor() {
    this.result = "";
    this.computerInput = this.getComputerInput();
  }

  // computerInput(정답)을 얻는 메서드
  getComputerInput() {
    let computerInput = 0;
    let count = 0;

    while (count < 3) {
      const pickedNumber = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!String(computerInput).includes(String(pickedNumber))) {
        if (count === 0) computerInput += pickedNumber * 100;
        else if (count === 1) computerInput += pickedNumber * 10;
        else computerInput += pickedNumber;  // count === 3
        count++;
      }
    }
    console.log(computerInput);
    return computerInput;  // 세 자리 정수 반환
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

  // 결과를 반환하는 메서드
  returnResult(computerString, userString) {
    const [strikeCnt, ballCnt] = this.countStrikeAndBall(computerString, userString);

    if (strikeCnt === 0 && ballCnt === 0) return "낫싱";
    if (strikeCnt === 3) return "정답입니다!";
    if (strikeCnt !== 0 && ballCnt === 0) return `${strikeCnt}스트라이크`;
    if (strikeCnt === 0 && ballCnt !== 0) return `${ballCnt}볼`;
    return `${ballCnt}볼 ${strikeCnt}스트라이크`;
  }
}
