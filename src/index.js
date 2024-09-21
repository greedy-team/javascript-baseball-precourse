export default class BaseballGame {
    constructor() {
        this.gameStart();
    }

    // 컴퓨터(상대방)의 숫자 생성에서의 비교
    makeRandomNumberIsDiff(numList, num) {
        let numSet = new Set(numList);
        return !numSet.has(num);
    }

    // 컴퓨터(상대방)의 숫자 생성 : string
    makeRandomNumbers() {
        let numbers = "";
        while (numbers.length < 3) {
            let num = MissionUtils.Random.pickNumberInRange(1, 9);
            if (this.makeRandomNumberIsDiff(numbers, String(num))) {
                numbers += String(num);
            }
        }
        return numbers;
    }

    // 사용자의 입력 유효성 확인
    checkUsersValidation(userInput) {
        if (!this.checkUserInputLength(userInput)) {
            return false;
        }
        if (!this.checkUserInputIsNumber(userInput)) {
            return false;
        }
        if (!this.checkUserInputNumberRange(userInput)) {
            return false;
        }
        if (!this.checkUserInputIsDiff(userInput)) {
            return false;
        }
        return true;
    }

    // 유저의 숫자 길이가 3인지
    checkUserInputLength(input) {
        return input.length === 3;
    }

    // 유저가 입력한 3개의 숫자가 모두 숫자인지
    checkUserInputIsNumber(input) {
        for (let i = 0; i < input.length; i++) {
            if (!Number(input[i])) {
                return false;
            }
        }
        return true;
    }

    // 유저의 숫자가 모두 1~9사이인지
    checkUserInputNumberRange(input) {
        for (let i = 0; i < input.length; i++) {
            if (1 > Number(input[i]) || 9 < Number(input[i])) {
                return false
            }
        }
        return true;
    }

    // 유저의 숫자가 모두 다른 숫자인지
    checkUserInputIsDiff(input) {
        let uniqueNumberSet = new Set(input);
        return uniqueNumberSet.size === input.length;
    }

    //볼, 스트라이크 판정
    checkingBallOrStrike(userNumber, computerNumber) {
        let score = [0, 0]; //볼,스트라이크
        for (let i = 0; i < 3; i++) {
            if (computerNumber[i] === userNumber[i]) {
                score[1] += 1;
            } else if (computerNumber.includes(userNumber[i])) {
                score[0] += 1;
            }
        }
        return score;
    }
    //판정결과를 문자열로 변경
    play(userNumber, computerNumber) {
        const score = this.checkingBallOrStrike(userNumber, computerNumber);
        if (score[0] === 0 && score[1] === 0) {
            return "낫싱";
        } else if (score[0] === 0 && score[1] > 0) {
            return `${score[1]}스트라이크`;
        } else if (score[0] > 1 && score[0] === 0) {
            return `${score[0]}볼`;
        } else {
            return `${score[0]}볼 ${score[1]}스트라이크`;
        }
    }

    //정답 여부 확인
    checkCorrectAnswer(result) {
        return result === "3스트라이크";
    }

    // 정답 여부에 따라 판정결과 변경
    printResult(answer) {
        const correctness = this.checkCorrectAnswer(answer);

        if (correctness) {
            answer = "🎉정답을 맞추셨습니다🎉" + this.restartPart();
            const submitBtn = document.querySelector("#submit");
            submitBtn.disabled = true;
        }
        return answer;
    }

    // HTML로 출력
    paintResult(result) {
        const resultContainer = document.querySelector("#result");
        resultContainer.innerHTML = this.printResult(result);
    }

    // 재시작 준비
    restartPart() {
        const restartBtn = `<button id="game-restart-button">재시작</button>`;
        return `<div>게임을 다시 시작하시겠어요? <br/>${restartBtn}</div>`
    }

    // 재시작 버튼 기능 부여
    giveFunctionToRestartBtn() {
        const restartBtn = document.getElementById("game-restart-button");
        restartBtn.addEventListener("click", this.restart);
    }

    restart() {
        const input = document.querySelector("#user-input");
        const submitBtn = document.querySelector("#submit");
        const result = document.querySelector("#result");

        input.value = null;
        submitBtn.disabled = false;
        result.innerHTML = "";

        return new BaseballGame();
    }

    gameStart() {
        const input = document.querySelector("#user-input");
        const submitBtn = document.querySelector("#submit");

        let computerRandomNumbers = this.makeRandomNumbers();

        submitBtn.addEventListener("click", (event) => {
            event.preventDefault();
            if (!this.checkUsersValidation(input.value)) {
                return alert("1~9사이의 서로 다른 세자리의 숫자를 입력해주세요!");
            }
            const result = this.play(input.value, computerRandomNumbers);
            this.paintResult(result);
            if (this.checkCorrectAnswer(result)) {
                this.giveFunctionToRestartBtn();
            }
        })
    }
}
new BaseballGame();