// 구현해야할 함수
// 1. 게임 결과 함수 play(컴퓨터 입력값, 유저 입력값) => 결과 문자열 반환
// 2. 랜덤 숫자 생성 함수 randomNumbers() => 랜덤 숫자 배열 반환
// 3. 입력 값 검증 함수 validateInput (유저 입력값) => 에러 메시지 반환
// 4. 결과 반환 함수 getResult(스트라이크, 볼) => 결과 문자열 반환
// 5. 숫자 문자열을 배열로 변환하는 함수 toNumberArray(문자열) => 숫자 배열 반환

// id(#). class(.) 등 유연하게 선택자 사용할 수 있게 getElementById 말고 querySelector DOM 요소 선택
const userInput = document.querySelector("#user-input");
const submitButton = document.querySelector("#submit");
const resultDiv = document.querySelector("#result");
const restartButton = document.querySelector("#game-restart-button");

export default class BaseballGame {
  // 컴퓨터 랜덤값과 유저값을 비교해서 결과 반환하는 함수
  play(computerInputNumbers, userInputNumbers) {
    const computerNumbers = computerInputNumbers;
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
    return numbers.toString().split("").map(Number);
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
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      // 중복되지 않는 랜덤숫자만 배열에 추가
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    return numbers;
  }
}

const game = new BaseballGame();
let computerNumbers = game.randomNumbers(); //게임 첫 시작 시 컴퓨터 랜덤 숫자 생성

// JS의 함수문법
// element.addEventListener("이벤트종류", () => {
//   // 이벤트 발생 시 실행할 코드
// });

restartButton.addEventListener("click", () => {
  computerNumbers = game.randomNumbers();
  userInput.value = ""; // 입력창 초기화
  resultDiv.textContent = ""; // 결과창 초기화
  restartButton.style.display = "none"; // 재시작 버튼 초기화 (숨기기)
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
  try {
    const userInputValue = userInput.value;
    game.validateInput(userInputValue); //userInput.value는 문자열(text)이므로 validateInput에서 숫자 배열로 변환해서 검증
    const result = game.play(computerNumbers, userInputValue);
    resultDiv.textContent = result;

    // 3스트라이크시 재시작 버튼 노출
    if (result === "3스트라이크") {
      restartButton.style.display = "block";
    }
  } catch (error) {
    //validateInput에서 발생한 에러 메시지 alert로 출력
    alert(error.message);
  }
});
