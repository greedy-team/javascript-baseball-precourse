  export default class BaseballGame {

    // BaseballGame 생성자
    constructor() {
      this.gameStart();
    }

    // 게임의 결과인 볼, 스트라이크, 낫싱 반환
    play(computerNumbers, userNumbers) {
      const results = this.compareNumbers(userNumbers, computerNumbers);

      if(results[0] === 0 && results[1] === 0)
        return "낫싱";
      else if(results[0] === 0 && results[1] !== 0)
        return results[1] + "볼";
      else if(results[0] !== 0 && results[1] === 0)
        return results[0] + "스트라이크";
      else
        return results[1] + "볼 " + results[0] + "스트라이크";
    }

    // 숫자 비교 후 볼, 스트라이크 확인
    compareNumbers(userNumbers, computerNumbers) {
      let results = [0, 0]; // 스트라이크, 볼

      for(let i = 0; i < 3; i++) {
        if(userNumbers[i] === computerNumbers[i]) 
          results[0]++;
        else if(computerNumbers.includes(userNumbers[i]))
          results[1]++;
      }

      return results;
    }

    // 컴퓨터 숫자 생성
    makeComputerNumbers() {
      let numbers = [];

      while(true) {
        numbers = [
          this.makeRandomNumber(),
          this.makeRandomNumber(),
          this.makeRandomNumber()
        ];

        if(this.validateComputerDifferentNumber(numbers))
          break;
      }

      return numbers;
    }

    // 1 ~ 9 랜덤 숫자 생성
    makeRandomNumber() {
      return MissionUtils.Random.pickNumberInRange(1, 9);
    }

    // 컴퓨터의 서로 다른 3자리 숫자를 서로 다른지 검증
    validateComputerDifferentNumber(computerNumbers) {
      return new Set(computerNumbers).size === 3;
    }

    // 3개의 숫자가 서로 다른 수인지 검증
    validateDifferentNumber(userNumbers) {
      if (new Set(userNumbers).size !== 3) {
        alert('잘못된 입력입니다. 중복되지 않는 서로 다른 3개의 숫자를 입력하세요.');
        return false;
      }
      return true;
    }

    // 사용자 입력 숫자 길이 검증
    validateLength(userNumbers) {
      if (userNumbers.length !== 3) {
        alert('잘못된 입력입니다. 3자리 숫자를 입력하세요.');
        return false;
      }
      return true;
    }

    // 사용자 숫자 형식 검증
    validateNumbers(userNumbers) {
      if (!/^\d{3}$/.test(userNumbers)) {
        alert('잘못된 입력입니다. 숫자만 입력하세요.');
        return false;
      }
      return true;
    }

    printResult(result) {
      const output = document.querySelector("#result");
      output.insertAdjacentHTML('beforeend', `<div>${result}</div>`);
    }

    // 게임 시작
    gameStart() {
      const input = document.querySelector("#user-input");
      const submit = document.querySelector("#submit");

      submit.addEventListener('click', (event) => {
        event.preventDefault(); // 기본 동작 방지
        const userInput = input.value;
        const userNumbers = userInput.split('').map(Number);

        let computerNumbers = this.makeComputerNumbers();

        if (!this.validateLength(userNumbers) ||
            !this.validateNumbers(userInput) ||
            !this.validateDifferentNumber(userNumbers)) {
          return;
        }

        let result = this.play(userNumbers, computerNumbers);
        this.printResult(result);
      });
    }
  }

new BaseballGame();