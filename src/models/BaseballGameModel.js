// Model은 Controller와 View에 의존하지 않아야 한다.
// 데이터 저장 및 처리
class BaseballGameModel {
  constructor() {
    // 게임 내내 유지되는 데이터
    // 컴퓨터가 랜덤으로 생성한 숫자 배열;
    this.computerNumbers = this.generateRandomNumbers();
  }
  // 파라미터 하나로 변경, validateInput에서 검증 후 play함수에서 호출
  play(userInputNumbers) {
    const userNumbers = this.splitStringToNumberArray(userInputNumbers);
    const { strikes, balls } = this.countStrikesAndBalls(userNumbers);

    return this.getResult(strikes, balls);
  }

  countStrikesAndBalls(userNumbers) {
    let strikes = 0;
    let balls = 0;
    for (let i = 0; i < 3; i++) {
      // 같은 위치에 같은 숫자가 있는 경우 스트라이크
      if (this.computerNumbers[i] === userNumbers[i]) {
        strikes++;
      }
      // 다른 위치에 같은 숫자가 있는 경우 볼
      else if (this.computerNumbers.includes(userNumbers[i])) {
        balls++;
      }
    }
    return { strikes, balls };
  }

  getResult(strikes, balls) {
    if (strikes === 0 && balls === 0) {
      return "낫싱";
    } else if (strikes > 0 && balls > 0) {
      return `${balls}볼 ${strikes}스트라이크`;
    } else if (strikes > 0) {
      return `${strikes}스트라이크`;
    } else {
      return `${balls}볼`;
    }
  }

  splitStringToNumberArray(numbers) {
    return numbers.toString().split("").map(Number);
  }

  // 유저 입력값 검증 함수
  // 1. 숫자가 아닌경우
  // 2. 3자리 숫자가 아닌경우
  // 3. 중복된 숫자가 있는 경우
  // 4. 1부터 9까지의 숫자가 아닌 경우
  // try-catch문으로 play함수에서 호출해서 에러메시지 출력
  validateInput(userInputNumbers) {
    const userNumbers = this.splitStringToNumberArray(userInputNumbers);
    // 1. 숫자(양의 정수)가 아닌 경우
    if (!/^\d+$/.test(userInputNumbers)) {
      throw new Error("양의 정수만 입력해주세요.");
    }
    // 2. 3자리 숫자가 아닌 경우
    if (userNumbers.length !== 3) {
      throw new Error("3자리 숫자를 입력해주세요.");
    }
    // 3. 중복된 숫자가 있는 경우
    const uniqueNumbers = new Set(userNumbers);
    if (uniqueNumbers.size !== userNumbers.length) {
      throw new Error("중복된 숫자는 입력할 수 없습니다.");
    }
    // 4. 1부터 9까지의 숫자가 아닌 경우
    for (const num of userNumbers) {
      if (num < 1 || num > 9) {
        throw new Error("1부터 9까지의 숫자만 입력해주세요.");
      }
    }
  }

  // 1부터 9까지의 숫자 중에서 중복되지 않는 3개의 숫자를 랜덤으로 생성하여 배열로 반환
  generateRandomNumbers() {
    // 컴퓨터가 랜덤 숫자 배열
    const numbers = [];
    while (numbers.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      // 중복되지 않는 랜덤숫자만 배열에 추가
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    return numbers;
  }
}

export default BaseballGameModel;
