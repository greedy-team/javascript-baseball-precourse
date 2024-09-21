  export default class BaseballGame {

    compareNumbers(userNumbers, computerNumbers) {
      let results = [0, 0, 0];

      for(let i = 0; i < 3; i++) {
        if(userNumbers[i] === computerNumbers[i]) 
          results[0]++;
        else if(computerNumbers.includes())
          results[1]++;
      
        return results;
      }
    }

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

    makeRandomNumber() {
      return MissionUtils.Random.pickNumberInRange(1, 9);
    }

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

    gameStart() {
      const input = document.querySelector("#user-input");
      const submit = document.querySelector("#submit");

      submit.addEventListener('click', (event) => {
        const userInput = input.value;
        const userNumbers = userInput.split('').map(Number);

        if (!this.validateLength(userNumbers) ||
            !this.validateNumbers(userInput) ||
            !this.validateDifferentNumber(userNumbers)) {
          return this.gameStart(); // 검증 실패 시 재시작
        }
        
        let computerNumbers = this.makeComputerNumbers();

        alert('입력이 유효합니다!');
      });
    }
  }

const game = new BaseballGame();
game.gameStart();