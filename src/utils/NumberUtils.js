export default class NumberUtils {

    validateDifferentNumber(userNumbers) {
        if (new Set(userNumbers).size !== 3) {
            return false;
        }
        return true;
    }

    validateNumbers(userInput) {
        // [1-9] 1부터 9의 숫자, {3} 3자리 수를 의미
        if (!/^[1-9]{3}$/.test(userInput)) {
            alert('잘못된 입력입니다. 1부터 9까지의 숫자만 입력하세요.');
            return false;
        }
        return true;
    }

    isPlayerWinner(result) {
        return result === "3스트라이크";
    }

    inputConvertNumbers(userInput) {
        return userInput.split('').map(Number);
    }
}