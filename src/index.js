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
        if (!this.checkUserInputLength(userInput)) return false;
        if (!this.checkUserInputIsNumber(userInput)) return false;
        if (!this.checkUserInputNumberRange(userInput)) return false;
        if (!this.checkUserInputIsDiff(userInput)) return false;
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
            if (!(1 <= Number(input[i]) && Number(input[i]) <= 9)) {
                return true
            }
        }
        return false;
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
            }
            if (computerNumber.includes(userNumber[i])){
                score[0] += 1;
            }
        }
        return score;
    }
}