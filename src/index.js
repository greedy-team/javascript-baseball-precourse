// 구현해야할 함수
// 1. 게임 결과 함수 play(컴퓨터 입력값, 유저 입력값) => 결과 문자열 반환
// 2. 랜덤 숫자 생성 함수 randomNumbers() => 랜덤 숫자 배열 반환
// 3. 입력 값 검증 함수 validateInput (유저 입력값) => 에러 메시지 반환
// 4. 결과 반환 함수 getResult(스트라이크, 볼) => 결과 문자열 반환
// 5. 숫자 문자열을 배열로 변환하는 함수 toNumberArray(문자열) => 숫자 배열 반환

export default class BaseballGame {
  // 컴퓨터 랜덤값과 유저값을 비교해서 결과 반환하는 함수
  play(computerInputNumbers, userInputNumbers) {
    // 숫자로 이루어진 문자열을 배열로 변환후 split으로 나눈후 map으로 숫자로 변환
    const computerNumbers = this.toNumberArray(computerInputNumbers);
    const userNumbers = this.toNumberArray(userInputNumbers);

    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      // 같은 위치에 같은 숫자가 있는 경우 스트라이크
      if (computerNumbers[i] === userNumbers[i]) {
        strikes++;
      }
      // 다른 위치에 같은 숫자가 있는 경우 볼
      else if (computerNumbers.includes(userNumbers[i])) {
        balls++;
      }
    }

    return this.getResult(strikes, balls);
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
      // 중복되지 않는 랜덤숫자만 배열에 추가
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
