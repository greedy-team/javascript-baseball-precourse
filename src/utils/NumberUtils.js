export default class NumberUtils {

    validateDifferentNumber(userNumbers) {
        if (new Set(userNumbers).size !== 3) {
            return false;
        }
        return true;
    }

    validateNumbers(userInput) {
        // [1-9] 1부터 9의 숫자, {3} 3자리 수를 의미
        return /^[1-9]{3}$/.test(userInput);
    }

    isPlayerWinner(result) {
        return result === "3스트라이크";
    }

    inputConvertNumbers(userInput) {
        return userInput.split('').map(Number);
    }

    makeNumbers() {
        let numbers = [];

        while (!this.validateDifferentNumber(numbers)) {
          numbers = [
            this.makeRandomNumber(),
            this.makeRandomNumber(),
            this.makeRandomNumber()
          ];
        }

        return numbers;
    }

    makeRandomNumber() {
        return MissionUtils.Random.pickNumberInRange(1, 9);
    }
}