export default class NumberUtils {
  
    validateDifferentNumber(userNumbers) {
        if (new Set(userNumbers).size !== 3) {
            alert("잘못된 입력입니다. 중복되지 않는 서로 다른 3개의 숫자를 입력하세요.");
            return false;
        }
        return true;
    }

    validateLength(userNumbers) {
        if (userNumbers.length !== 3) {
            alert('잘못된 입력입니다. 3자리 숫자를 입력하세요.');
            return false;
        }
        return true;
    }

    validateNumbers(userNumbers) {
        // [1-9] 1부터 9의 숫자, {3} 3자리 수를 의미
        if (!/^[1-9]{3}$/.test(userNumbers)) {
            alert('잘못된 입력입니다. 1부터 9까지의 숫자만 입력하세요.');
            return false;
        }
        return true;
    }

    isPlayerWinner(result) {
        return result === "3스트라이크";
    }
}