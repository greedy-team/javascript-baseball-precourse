// 데이터의 생성, 저장, 처리를 전담

export default class BaseballModel {
    constructor(){
        this.computerInputNumbers=this.generateComputerNumbers();
    }

    // 컴퓨터 숫자 생성 (중복 없는 난수 3개)
    generateComputerNumbers() {
        const numbers = [];
        while (numbers.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!numbers.includes(number)) numbers.push(number);
        }
        return numbers;
    } 

    // 스트라이크와 볼의 개수를 계산하는 함수
    countScore(computerInputNumbers,userInputNumbers){
        
        let strike = 0;
        let ball = 0;

        for(let i=0;i<3;i++){
            const userDigit=Number(userInputNumbers[i]);
            //userInput.value로 가져온 값은 무조건 글자 상태로 들어오기 때문에 
            // Number()을 써서 숫자로 변환
            if(userDigit===this.computerInputNumbers[i]){
                strike++;
            }else if (this.computerInputNumbers.includes(userDigit)){
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
        if(strike === 3){
            return "3스트라이크"
        }
        // string으로 출력하는 방식
        // 1. 템플릿 리터럴: 백틱(` `)과 ${} 사용 (대부분 템플릿 리터럴 사용함)
        // 2. 문자열 연결 연산자: (+) 기호 사용
        // 3. 배열 합치기(join): result.join(" ") 사용
        // 볼과 스트라이크가 있을수도 없을수도 있으니 join 사용함
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
        const {strike, ball} = this.countScore(userInputNumbers, computerInputNumbers);

        // 2. 메시지 생성
        return this.resultString(strike, ball);
    }

    prepareNewGame(){
        // 컴퓨터 숫자를 생성하는 로직은 게임의 핵심 데이터라 생각해서 
        // view로 전부 이사시키지 않고 Model로 분류함
        this.computerInputNumbers = this.generateComputerNumbers();
    }
}