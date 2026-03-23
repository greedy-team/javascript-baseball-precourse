// 데이터의 생성, 저장, 처리를 전담

const DIGIT_COUNT = 3;

export default class BaseballModel {
    constructor(){
        this.computerInputNumbers=this.generateComputerNumbers();
    }

    // 컴퓨터 숫자 생성 (중복 없는 난수 3개)
    generateComputerNumbers() {
        const numbers = [];
        while (numbers.length < DIGIT_COUNT) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!numbers.includes(number)) numbers.push(number);
        }
        return numbers;
    } 

    // 스트라이크와 볼의 개수를 계산하는 함수
    countScore(computerInputNumbers,userInputNumbers){

        let strike = 0;
        let ball = 0;

        for(let i=0;i<DIGIT_COUNT;i++){
            const userDigit=Number(userInputNumbers[i]);
            //userInput.value로 가져온 값은 무조건 글자 상태로 들어오기 때문에 
            // Number()을 써서 숫자로 변환
            if(userDigit===computerInputNumbers[i]){
                strike++;
            }else if (computerInputNumbers.includes(userDigit)){
                ball++;
            }
        }
        return {strike, ball};
    }

    // 결과를 문자열로 반환하는 함수
    resultString(strike,ball){
        // 조건에 맞춰 문자열로 출력
        if (strike === 0 && ball === 0){
            return "낫싱";
        }
        if(strike === DIGIT_COUNT){
            return "3스트라이크"
        }

        // 가변적인 볼/스트라이크 조합의 공백 처리를 자동화하기 위해 join 사용
        const result = [];

        if(ball > 0){
            result.push(`${ball}볼`);
        }

        if(strike > 0){
            result.push(`${strike}스트라이크`);
        }

        return result.join(" ");
    }

    // 스트라이크/볼 판정
    play(computerInputNumbers,userInputNumbers){
        // 1. 점수 계산
        // 중괄호를 사용해서 구조 분해 할당 및 코드 간소화
        const {strike, ball} = this.countScore(computerInputNumbers, userInputNumbers);

        // 2. 메시지 생성
        return this.resultString(strike, ball);
    }

    prepareNewGame(){
        // 컴퓨터 숫자를 생성하는 로직은 게임의 핵심 데이터라 생각해서 
        // view로 전부 이사시키지 않고 Model로 분류함
        this.computerInputNumbers = this.generateComputerNumbers();
    }
}
