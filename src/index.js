// 구현해야할 함수
// 1. 게임 결과 함수
// 2. 랜덤 숫자 생성 함수
// 3. 입력 값 검증 함수

export default class BaseballGame {
  // 컴퓨터 랜덤값과 유저값을 비교해서 결과 반환하는 함수
  play(computerInputNumbers, userInputNumbers) {
    // 숫자로 이루어진 문자열을 배열로 변환후 split으로 나눈후 map으로 숫자로 변환
    const computerNumbers = this.toNumberArray(computerInputNumbers);
    const userNumbers = this.toNumberArray(userInputNumbers);

    return "결과 값 String";
  }

  toNumberArray(numbers) {
    return input.toString().split("").map(Number);
  }

  // 유저 입력값 검증 함수
  // 1. 숫자가 아닌경우
  // 2. 3자리 숫자가 아닌경우
  // 3. 중복된 숫자가 있는 경우
  // 4. 1부터 9까지의 숫자가 아닌 경우
  // try-catch문으로 play함수에서 호출해서 에러메시지 출력
  validateInput(userInputNumbers) {
    const userNumbers = this.toNumberArray(userInputNumbers);

    // 1. 숫자가 아닌 경우
    if (isNaN(userInputNumbers)) {
      throw new Error("숫자만 입력해주세요.");
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
  randomNumbers() {
    // 컴퓨터가 랜덤 숫자 배열
    const numbers = [];
    while (numbers.length < 3) {
      const randomNum = Random.pickNumberInRange(1, 9);
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    return numbers;
  }
}

// 예시
// play(123, 456); // '낫싱'
// play(123, 345); // '1볼'
// play(123, 432); // '2볼'
// play(123, 312); // '3볼'
// play(123, 145); // '1스트라이크'
// play(123, 134); // '1볼 1스트라이크'
// play(123, 132); // '2볼 1스트라이크'
// play(123, 124); // '2스트라이크'
