//Model
export default class BaseballGame {
    constructor() {
        this.computerNumbers = this.getRandomNumberString();
    }

    getRandomNumberString() {
        let randomNumber = [];
        while (randomNumber.length < 3) {
            let num = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!randomNumber.includes(num)) {
                randomNumber.push(num);
            }
        }
        randomNumber = randomNumber.join("");
        console.log(randomNumber);

        return randomNumber;
    }

    handleUserInput() {
        let userInput = this.getUserInput();

        if (this.checkUserInput(userInput)) {
            return;
        }

        const comparisionResult = this.compareInputWithAnswer(userInput);
        return comparisionResult;
    }

    getUserInput() {
        let userInput = document.getElementById("user-input").value;
        return userInput;
    }

    compareInputWithAnswer(userInput) {
        let strikeCount = 0, ballCount = 0;

        for (let i = 0; i < 3; i++) {
            if (userInput[i] === this.computerNumbers[i]) {  //스트라이크
                strikeCount++;
            }
            else if (this.computerNumbers.includes(userInput[i])) {   //볼
                ballCount++;
            }
        }

        return this.play(strikeCount, ballCount);
    }

    play(strikeCount, ballCount) {
        let resultMessage = "";

        if (ballCount > 0) {
            resultMessage += `${ballCount}볼 `;
        }
        if (strikeCount > 0) {
            resultMessage += `${strikeCount}스트라이크`;
        }
        if (ballCount == 0 && strikeCount == 0) {
            resultMessage = "낫싱";
        }
        return resultMessage;
    }

    checkUserInput(userInput) {
        const isNotNumber = isNaN(userInput);
        if (isNotNumber) {
            alert("잘못된 값을 입력했습니다.\n숫자를 입력해주세요.");
            return true;
        }
        if (userInput.length !== 3) {
            alert("잘못된 값을 입력했습니다.\n세자리 숫자를 입력해주세요");
            return true;
        }
        if (new Set(userInput).size !== 3) {
            alert("잘못된 값을 입력했습니다.\n중복되지않는 세자리 숫자를 입력해주세요.");
            return true;
        }
        return false;
    }
}
